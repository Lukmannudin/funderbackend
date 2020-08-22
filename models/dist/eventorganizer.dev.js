"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("sequelize"),
    Op = _require.Op;

var bcrypt = require('bcryptjs');

var saltRounds = 10;

var _require2 = require('../sequelize'),
    models = _require2.models;

var EventOrganizer =
/*#__PURE__*/
function () {
  function EventOrganizer() {
    _classCallCheck(this, EventOrganizer);
  }

  _createClass(EventOrganizer, [{
    key: "getAllUser",
    value: function getAllUser() {
      return regeneratorRuntime.async(function getAllUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(models.user_eos.findAll());

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "createPassword",
    value: function createPassword() {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash("admin", salt, function (err, hash) {
          console.log("hash: " + hash);
        });
      });
    }
  }, {
    key: "checkPassword",
    value: function checkPassword(username, password) {
      var user;
      return regeneratorRuntime.async(function checkPassword$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(models.user_eos.findOne({
                where: _defineProperty({}, Op.or, [{
                  name: username
                }, {
                  email: username
                }])
              }));

            case 2:
              user = _context2.sent;

              if (!bcrypt.compareSync(password, user.password)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", user);

            case 7:
              return _context2.abrupt("return", false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return EventOrganizer;
}();

module.exports = EventOrganizer;