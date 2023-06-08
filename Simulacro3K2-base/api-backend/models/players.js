
const DataTypes = require('sequelize')

const playersAtrributs = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    full_name : {
        type : DataTypes.STRING(50),
        allowNull : false,
        validate: {
            notEmpty : {
                args : true,
                msg : "Es necesario el full name"
            }
        }
    },
    email : {
        type : DataTypes.STRING(50),
        allowNull : false,
        validate: {
            notEmpty : {
                args : true,
                msg : "Es necesario el mail"
            }
        }
    },
    nickname : {
        type : DataTypes.STRING(50),
        allowNull : false,
        validate: {
            notEmpty : {
                args : true,
                msg : "Es necesario el nickname"
            }
        }
    },
    ip_address : {
        type : DataTypes.STRING(20),
        allowNull : false,
        validate: {
            notEmpty : {
                args : true,
                msg : "Es necesario el ip address"
            }
        }
    },
    age : {
        type : DataTypes.INTEGER,
        allowNull : false,
        validate: {
            notEmpty : {
                args : true,
                msg : "Es necesario la edad"
            }
        }
    },
    avatar : {
        type : DataTypes.STRING(20),
        allowNull : false,
        validate: {
            notEmpty : {
                args : true,
                msg : "Es necesario la edad"
            }
        }
    }
}

const playersOptions = {
    timestamps: false
}

const playersModels = {
    playersAtrributs,
    playersOptions
}

module.exports = playersModels;