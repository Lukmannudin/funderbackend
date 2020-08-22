const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('company', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email : {
            type: DataTypes.TEXT
        },
        password : {
            type: DataTypes.TEXT
        },
        vision : {
            type: DataTypes.TEXT
        },
        mission : {
            type: DataTypes.TEXT
        },
        photo : {
            type: DataTypes.TEXT
        }
    })
}