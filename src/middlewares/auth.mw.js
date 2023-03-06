import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../constants";
import { User } from "../libs/config";
export const verify = async (req, res, next) => {
    try{
        const token = req.headers['authorization'];
    
        if(!token){
            return res.status(403).json({
                message: "Forbidden Error"
            });
        }
    
        const decoded = jwt.verify(token, SECRET_JWT);
        const verifyUser = await User.findAll({
            where:{
                uuid:decoded.id
            }
        });
        req.userId = decoded.id;
        if(!verifyUser.length > 0 ){
            return res.status(403).json({
                message: "Forbidden Error"
            });
        }
        next();
        
    }catch(e){
        console.log(e)
        return res.status(403).json({
            message: "Forbidden Error"
        });
    }
}

export const isAdmin = async (req, res, next) => {
    try{
        const id = req.userId;
        if(!id){
            return res.status(403).json({
                message: "Forbidden Error"
            });
        }

        const user = await User.findAll({
            where : {
                uuid: id
            }
        });

        if(!user.length > 0 ) return res.status(403).json({
            message: "Forbidden Error"
        });

        const isAdmin = user[0]?.role === "admin";

        if(!isAdmin) return res.status(403).json({
            message: "Forbidden Error"
        });

        next();
    }catch(e){
        console.log(e)
        return res.status(403).json({
            message: e
        });
    }
    
}

