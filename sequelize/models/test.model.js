const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('test', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.INTEGER}
            ,
        text : {
            type: DataTypes.TEXT
        }
    })
}