import { User } from "../libs/config";
import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../constants";

export const signUp = async (req, res) => {
    const {username, password, email} = req.body;
    const findUser = await User.findAll({
        where: {
            username,
        }
    })
    if(findUser.length > 0 ){
        return res.status(303).json({
            message:"username already exists, please use another username"
        });
    }
    
    const newUser = await User.create({
        username, 
        password,
        email,
        role : "user"
    });

    const token = jwt.sign({id: newUser.uuid}, SECRET_JWT, {
        expiresIn: 86400
    });
    res.status(200).json({
        message:"user created",
        username: newUser.username,
        auth_token: token
    })
}

//login
export const signIn = async (req, res) => {
    const {username, password} = req.body
    const user = await User.findAll({
        where:{
            username
        }
    });
    if(!user.length > 0){
        return res.status(401).json({
            message: "Invalid Password or Username"
        });
    };

    const validPassword = await User.validPassword(password, user[0].password);
    if(!validPassword){
        return res.status(401).json({
            message: "Invalid Password or Username"
        });
    }

    const token = jwt.sign({id: user[0].uuid}, SECRET_JWT, {expiresIn:86400});
    res.status(200).json({
        message: 'SignIn',
        token
    })
}