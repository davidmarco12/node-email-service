export const EmailModel = (sequelize, type) => {
    return  sequelize.define('Email',{
        uuid:{
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false,
            primaryKey:true
        },
        idUser:{
            type: type.UUID,
            allowNull: false,
        },
        sendDate:{
            type: type.DATE,
            allowNull: false,
        },
        emailNumber:{
            type: type.INTEGER,
            allowNull: false,
        },
    });
}