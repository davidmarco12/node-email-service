import Mailgun from "mailgun-js";
import { MAILGUNDOMAIN, MAILGUNSERVICE } from "../constants";

const mailgun = new Mailgun({
    apiKey: MAILGUNSERVICE,
    domain: MAILGUNDOMAIN
});
// const client = mailgun.client({username: 'api', key: API_KEY})

export const secondEmailProvider = async (msg) => {
    try{
        await mailgun.messages().send(msg);
        return true;
    }catch(e){
        return false;
    }
}