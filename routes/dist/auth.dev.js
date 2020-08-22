"use strict";

var express = require('express');

var router = express.Router();

var hash = require("pbkdf2-password");

var session = require('express-session');

var app = express();

var _require = require('../sequelize'),
    models = _require.models;

var EventOrganizer = require('../models/eventorganizer');

var res = require('express/lib/response');

var eo = new EventOrganizer();
router.get('/allEos', function (req, res, next) {
  showAllEo(req, res);
});

function showAllEo(req, res) {
  return regeneratorRuntime.async(function showAllEo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(eo.getAllUser());

        case 2:
          users = _context.sent;
          res.status(200).json(users);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

router.get("/login", function (req, res, next) {
  var user = eo.checkPassword(req.body.username, req.body.password);
  user.then(function (result) {
    var data = {
      messages: "Success",
      data: result
    };

    if (!result) {
      data.messages = "Incorrect username and password";
      data.data = {};
    }

    res.json(data);
  })["catch"](function (err) {
    console.log(err);
    console.log("Promise Rejected");
  });
});
module.exports = router;