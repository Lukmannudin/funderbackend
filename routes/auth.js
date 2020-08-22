var express = require('express');
var router = express.Router();
var hash = require("pbkdf2-password");
var session = require('express-session');
var app = express();
var { models } = require('../sequelize');

const EventOrganizer = require('../models/eventorganizer');
const res = require('express/lib/response');

var eo = new EventOrganizer();
router.get('/allEos', function(req, res, next) {  
  showAllEo(req,res);
});

async function showAllEo(req,res){
  users = await eo.getAllUser();
  res.status(200).json(users);
}

router.get("/login", function(req, res, next){
  let user = eo.checkPassword(req.body.username, req.body.password);
  
  user.then(function (result) {
    let data = {
      messages: "Success",
      data: result
    }
    if (!result){
      data.messages = "Incorrect username and password"
      data.data = {}
    }

    res.json(data)

  }).catch(function (err) {
      console.log(err);
      console.log("Promise Rejected");
  })
});


  
module.exports = router;