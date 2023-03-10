import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../constants";
import { User } from "./config";

export const initialize = async () => {
  try {
    const admin = await User.findAll({
      where: {
        username: ADMIN_USERNAME,
      },
    });

    if (admin.length > 0) return;

    await User.create({
      username: ADMIN_USERNAME,
      password: ADMIN_PASSWORD,
      email: "admin@email.com",
      role: "admin",
    });
  } catch (e) {
    console.log(e);
  }
};
