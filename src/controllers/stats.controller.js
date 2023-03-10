import { User, Email, sequelize } from "../libs/config";
import { Op, literal } from "sequelize";

export const getUsersByDate = async (req, res) => {
  try {
    const { date } = req.query; //2023-03-04
    const date1 = date + " 00:00:00";
    const date2 = date + " 23:59:59";

    //Relations
    //this should be in another file, but sinces its for one time function im putting here.
    Email.belongsTo(User, { foreignKey: "idUser" });
    User.hasMany(Email, { foreignKey: "uuid" });

    const emails = await Email.findAll({
      group: ["idUser", "User.username"],
      includeIgnoreAttributes: false,
      attributes: [
        "idUser",
        [sequelize.col("User.username"), "userName"], // We had to list all attributes...
        [sequelize.fn("MAX", sequelize.col("Email.sendDate")), "lastDateSend"], // To add the aggregation...
        [sequelize.fn("MAX", sequelize.col("Email.emailNumber")), "emailNum"], // To add the aggregation...
      ],
      where: {
        sendDate: {
          [Op.gte]: date1, // >= 6
          [Op.lte]: date2, // <= 10
        },
      },
      include: [
        {
          model: User,
          as: "User",
          atributes: ["username"],
        },
      ],
    });

    res.status(200).json({
      message: emails,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};
