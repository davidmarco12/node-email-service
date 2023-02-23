import { sendEmail } from "../emailProviders/firstEmailProvider";
import { User } from "../libs/config"
import { sendSecondEmail } from "../emailProviders/secondEmailProvider";

export const getUsers = async (req, res) => {
    try{
        // const msg = {
        //     to: "d3xuscs@gmail.com",
        //     from: "d3xuscs@gmail.com", // Change to your verified sender
        //     subject:"any",
        //     text:"testing",
        // }    
        // const users = await sendEmail(msg);
        //const response = await sendSecondEmail(msg);
        res.json({
            status: 200,
            message:response
        });
    }catch(error){
        console.log(error)
    }
}

export const getUser = (req, res) => {

}

export const createUser = (req, res) => {

}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}

