import { User, Email, sequelize } from "../libs/config";
import { Op, literal  } from "sequelize";



export const getUsersByDate = async (req, res) => {
    try{
        const { date } = req.body; //2023-03-04
        const date1 = date+' 00:00:00'
        const date2 = date+' 23:59:59'
        
        //Relations
        //this should be in another file, but sinces its for one time function im putting here.
        Email.belongsTo(User, { foreignKey: 'idUser' });
        User.hasMany(Email, { foreignKey: 'uuid' });

        const emails = await Email.findAll({
            group: ["idUser", "User.username"],
            includeIgnoreAttributes: false,
            attributes: [
                'idUser', literal('"User"."username"'), // We had to list all attributes...
                [sequelize.fn('MAX', sequelize.col('Email.sendDate')), 'datesend'], // To add the aggregation...
                [sequelize.fn('MAX', sequelize.col('Email.emailNumber')), 'emailNum'] // To add the aggregation...  
            ],
            where:{
                sendDate: {
                    [Op.gte]: date1,                             // >= 6
                    [Op.lte]: date2,                            // <= 10
                }
            },
            include: [{ 
                model: User,
                as: "User",
                atributes : ["username"]
            }],
        });
        //I dont know why my attributes are not showing all, so im gonna make another function for that.
        const listIds = emails.map(emailData => emailData.idUser);
        const users = await User.findAll({
            where : {
                uuid : listIds,
            }
        });    
        const lastDataForEmail = emails.map((email, i) => {
            const dataUser = users.find(user => email.idUser === user.uuid);
            return {
                username: dataUser.username,
                userEmail: dataUser.email,
                countEmail: email.dataValues["emailNum"],
                dateSend: date,
            }
        });

        res.status(200).json({
            message: lastDataForEmail
        });

    }catch(e){
        console.log(e)
        res.status(500).json({
            message:e.message
        });
    }

    
    
}