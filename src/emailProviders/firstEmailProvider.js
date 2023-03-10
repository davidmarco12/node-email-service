// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import { MailService } from "@sendgrid/mail";
import { SENDGRIDSERVICE } from "../constants";
import { secondEmailProvider } from "./secondEmailProvider";
const sgMail = new MailService();
sgMail.setApiKey(SENDGRIDSERVICE);

export const firstEmailProvider = async (msg) => {
  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    return secondEmailProvider(msg);
  }
};
