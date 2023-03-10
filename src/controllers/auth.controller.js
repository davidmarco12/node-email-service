import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import { SECRET_JWT } from "../constants";
import { User } from "../libs/config";
import { validateEmail, validatePassword } from "../libs/util";

export const signUp = async (req, res) => {
  const { username, password, email } = req.body;
  const findUser = await User.findAll({
    where: {
      [Op.or]: [{ username: username }, { email: email }],
    },
  });
  if (findUser.length > 0) {
    return res.status(303).json({
      message: "username or email already exists, please use another one",
    });
  } else if (!validateEmail(email)) {
    return res.status(303).json({
      message: "Invalid Email",
    });
  } else if (!validatePassword(password)) {
    return res.status(303).json({
      message:
        "Invalid Password / minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1",
    });
  }

  const newUser = await User.create({
    username,
    password,
    email,
    role: "user",
  });

  const token = jwt.sign({ id: newUser.uuid }, SECRET_JWT, {
    expiresIn: 3600,
  });
  res.status(200).json({
    message: "user created",
    username: newUser.username,
    auth_token: token,
  });
};

//login
export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findAll({
    where: {
      username,
    },
  });
  if (!user.length > 0) {
    return res.status(401).json({
      message: "Invalid Password or Username",
    });
  }

  const validPassword = await User.validPassword(password, user[0].password);
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid Password or Username",
    });
  }

  const token = jwt.sign({ id: user[0].uuid }, SECRET_JWT, { expiresIn: 3600 });
  res.status(200).json({
    message: "SignIn",
    token,
  });
};
