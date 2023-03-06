import { Sequelize } from "sequelize";
//Creating the models for db.
import { UserModel } from "../models/user.model";
import { EmailModel } from "../models/email.model";
import {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} from "../constants";
import { initialize } from "./startSetup";


console.log({DB_HOST})
export const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

sequelize.sync({ force : false}).then(() => {
    initialize();
    console.log("*----------------------Sync Tables------------------------*");

}).catch(e =>{
    console.log("*----------------------ERROR Sync Tables------------------------*");
    console.log(e);
});

export const User = UserModel(sequelize, Sequelize);
export const Email = EmailModel(sequelize, Sequelize);



