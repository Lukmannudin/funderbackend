
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user_eos', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.TEXT
        },
        name: {
            type: DataTypes.STRING
        },
        point: {
            type: DataTypes.INTEGER
        },
        vision: {
            type: DataTypes.TEXT
        },
        mission: {
            type: DataTypes.TEXT
        },
        photo: {
            type: DataTypes.TEXT
        }
    })
}