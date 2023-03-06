import bcrypt from "bcryptjs"
export const UserModel = (sequelize, type) => {
    const User = sequelize.define('Users',{
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
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
            },
            instanceMethods: {
                validPassword: (password) => {
                    return bcrypt.compareSync(password, this.password);
                }
            }
    });
    User.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    }

    return User
}