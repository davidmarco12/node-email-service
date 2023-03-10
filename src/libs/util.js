import moment from "moment";
import validator from "validator";

export const isADayOlder = (date) =>
  moment("2023-03-01 22:54:21").fromNow() === "a day ago";

export const validatePassword = (password) => {
  return validator.isStrongPassword(password);
};

export const validateEmail = (email) => {
  return validator.isEmail(email);
};
