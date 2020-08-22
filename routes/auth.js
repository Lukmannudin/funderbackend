var express = require('express');
var router = express.Router();
var hash = require("pbkdf2-password");
var session = require('express-session');
var app = express();
var { models } = require('../sequelize');

const EventOrganizer = require('../models/eventorganizer');

var eo = new EventOrganizer();
router.get('/allEos', function(req, res, next) {  
  showAllEo(req,res);
});

async function showAllEo(req,res){
  users = await eo.getAllUser();
  res.status(200).json(users);
}

router.get("/login", function(req, res, next){
  user = eo.startPassword();
  
  res.status(200).json(eo.checkPassword("admin"));
});
  
module.exports = router;