import { firstEmailProvider } from "../emailProviders/firstEmailProvider";
import { Email } from "../libs/config";
export const sendEmail = async (req, res) => {
    try{
        const date = new Date();
        const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const {to, from, subject, text} = req.body;
        const idUser = req.idUser;
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

        const response = await firstEmailProvider(msg);

        if(!response){
            throw new Error('Error')
        }

        const newEmail = await Email.create({
            idUser,
            sendDate: new Date(),
            emailNumber:1
        });

    }catch(error){
        res.status(500).json({
            message:"Error"
        });
    }
}