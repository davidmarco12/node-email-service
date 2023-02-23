export const UserModel = (sequelize, type) => {
    return  sequelize.define('Users',{
        uuid:{
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false,
            primaryKey:true
        },
        username:{
            type: type.TEXT,
            allowNull: false,
        },
        password:{
            type: type.TEXT,
            allowNull: false,
        },
        email:{
            type: type.TEXT,
            allowNull: false,
        },
        role:{
            type: type.TEXT,
            allowNull: false,
        }
    });
}