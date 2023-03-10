import { Op, literal } from "sequelize";
import { firstEmailProvider } from "../emailProviders/firstEmailProvider";
import { Email, sequelize } from "../libs/config";
import { isADayOlder } from "../libs/util";

export const sendEmail = async (req, res) => {
  try {
    const { to, from, subject, text } = req.body;
    const idUser = req.userId;
    const msg = {
      to,
      from,
      subject,
      text,
    };

    let emailCounter = 0;

    const trackEmails = await Email.findAll({
      limit: 1,
      order: [["date", "DESC"]],
      group: ["idUser", "emailNumber"],
      attributes: [
        "idUser",
        "emailNumber",
        [sequelize.fn("MAX", sequelize.col("sendDate")), "date"], // To add the aggregation...
      ],
      where: {
        [Op.and]: [
          { idUser },
          {
            sendDate: {
              [Op.gte]: literal(`NOW() - INTERVAL '1 day'`),
            },
          },
        ],
      },
    });

    if (trackEmails.length > 0) {
      emailCounter = trackEmails[0].emailNumber;
      if (emailCounter === 1000) throw new Error("Excedeed emails");
    }

    const response = await firstEmailProvider(msg);

    if (!response) {
      throw new Error("Error");
    }

    await Email.create({
      idUser,
      sendDate: new Date().toLocaleString(),
      emailNumber: emailCounter + 1,
    });

    return res.status(200).json({
      message: "Email send",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
