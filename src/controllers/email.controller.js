import { firstEmailProvider } from "../emailtest/firstEmailProvider";

export const sendEmail = async (req, res) => {
    try{
        const {to, from, subject, text} = req.body;
        const msg = {
            to,
            from,
            subject,
            text
        }
        
        const response = await firstEmailProvider(msg);

        if(response){
            res.status(200).json({
                message:"Email Sent"
            })
        }
        else{
            throw new Error('Error')
        }
    }catch(error){
        res.status(500).json({
            message:"Error"
        });
    }
}