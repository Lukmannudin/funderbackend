const { Op } = require("sequelize");

const bcrypt = require('bcrypt');

const saltRounds = 10;

var { models} = require('../sequelize');

class EventOrganizer {
    async getAllUser(){
        return await models.user_eos.findAll();
    }

    createPassword(params) {
        bcrypt.genSalt(saltRounds, function(err, salt){
            bcrypt.hash("admin", salt, function(err, hash){
                console.log("hash: "+hash);
            })
        })    
    }

    async checkPassword(username, password){
        
        let user = await models.user_eos.findOne({
            where: {
                [Op.or]: [{ name: username }, { email: username }],  
            }
        });

        if (bcrypt.compareSync(password, user.password)){
            return user;
        } else {
            return false;
        }
       
    }
}

module.exports = EventOrganizer;