import { firstEmailProvider } from "../emailProviders/firstEmailProvider";
import { Email } from "../libs/config";
import { isADayOlder } from "../libs/util";


export const sendEmail = async (req, res) => {
    try{
        const {to, from, subject, text} = req.body;
        const idUser = req.userId;
        const msg = {
            to,
            from,
            subject,
            text
        }
        let emailCounter = 0;

        const trackEmails = await Email.findAll({
            where:{
                idUser
            }
        });
        //From all emails, find the last one, and take his counter
        let lastEmail;
        if(trackEmails.length > 0 ){
            lastEmail = trackEmails.pop();
            emailCounter = lastEmail.emailNumber;
        
            const isOlder = isADayOlder(lastEmail.sendDate);
            
            if(emailCounter === 10000  && isOlder) throw new Error("Excedeed emails");
            if(isOlder) emailCounter = 0;
            
        }
        
        const response = await firstEmailProvider(msg);

        if(!response){
            throw new Error('Error')
        }

        const currentDay = new Date().toLocaleString();

        await Email.create({
            idUser,
            sendDate: currentDay,
            emailNumber: emailCounter+1
        });

        return res.status(200).json({
            message:"Email send"
        });

    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}