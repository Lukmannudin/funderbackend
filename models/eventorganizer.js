var { models } = require('../sequelize');
const bycrypt = require('bcrypt');
const saltRounds = 10;

class EventOrganizer {
    async getAllUser(){
        return await models.user_eos.findAll();
    }

    createPassword(params) {
        bycrypt.genSalt(saltRounds, function(err, salt){
            bycrypt.hash(myPlainTextPassword, salt, function(err, hash){
                console.log("hash: "+hash);
            })
        })    
    }

    checkPassword(email, password){
        let user = models.EventOrganizer.user_eos.findAll({
            where: {
                
            }
        })

        bycrypt.compare(password, "$2b$10$aohWb27U.cllVBlPqod4XuZ/pVeoFL288J4/in7D7IxXsClBf6XeO", function(err,result){
            if (err) throw err;
            console.log("Ternyata: "+result)
        })
    }
}

module.exports = EventOrganizer;