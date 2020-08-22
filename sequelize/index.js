
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('heroku_2025d107c7cc58f', 'b3d7783a324beb', '83b47be1',{
    host: 'us-cdbr-iron-east-05.cleardb.net',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});


const modelDefiners = [
    require('./models/company.model'),
    require('./models/usereo.model')
]

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error("Unable to connect to the database:", err);
        })




module.exports = sequelize;