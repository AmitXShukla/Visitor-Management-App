const mongoose = require('./dbconnection');
const jwt = require('jsonwebtoken');
const User = require('./user');
const Host = require('./host');
const Guest = require('./guest');
const Register = require('./register');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var resultsNotFound = {
  "errorCode": 0,
  "errorMessage": "Operation not successful.",
  "rowCount": 0,
  "data": ""
};
var resultsFound = {
  "errorCode": 1,
  "errorMessage": "Operation successful.",
  "rowCount": 1,
  "data": ""
};

module.exports = {
  createUser: function (req, res) {
    bcrypt.hash(req.body.inputPassword, saltRounds, function (err, hash) {
      return User.find({ inputEmail: req.body.inputEmail }).then((results) => {
        if (results.length > 0) {
          resultsNotFound["errorMessage"] = "User email is already taken.";
          return res.send(resultsNotFound);
        } else {
          let user = new User({ inputEmail: req.body.inputEmail, inputPassword: hash });
          user.save();
          return res.send(resultsFound);
        }
      })
    });
  },
  loginUser: function (req, res) {
    return User.find({ inputEmail: req.body.inputEmail }).then((results) => {
      if (results.length > 0) {
        // email is correct, checking password
        bcrypt.compare(req.body.inputPassword, results[0].inputPassword, function (err, result) {
          if (result == true) {
            var token = {
              "token": jwt.sign(
                { email: req.body.inputEmail },
                process.env.JWT_SECRET,
                { expiresIn: '30d' }
              )
            }
            resultsFound["data"] = token;
            res.send(resultsFound);
          } else {
            resultsNotFound["errorMessage"] = "Incorrect Password.";
            return res.send(resultsNotFound);
          }
        });
        // password validation complete
      } else {
        // email is not correct
        resultsNotFound["errorMessage"] = "User Id not found.";
        return res.send(resultsNotFound);
      }
    })
  },
  setHost: function (req, res) {
    let host = new Host({
      inputName: req.body.inputName, inputAddress: req.body.inputAddress, inputEmail: req.body.inputEmail,
      inputPhone: req.body.inputPhone,
      inputComments: req.body.inputComments
    });
    host.save();
    return res.send(resultsFound);
  },
  updateHost: function (req, res) {
    return Host.updateOne({ _id: req.body._id }, req.body, { upsert: true, setDefaultsOnInsert: true }).then((results) => {
      if (results) {
        res.send(resultsFound);
      } else {
        return res.send(resultsNotFound);
      }
    });
  },
  deleteHost: function (req, res) {
    return Host.deleteOne({ _id: req.body._id }).then((results) => {
      if (results) {
        console.log("res")
        console.log(results)
        res.send(resultsFound);
      } else {
        return res.send(resultsNotFound);
      }
    });
  },
  getHosts: function (req, res) {
    return Host.find({
      "inputName": (req.body.inputName) ? req.body.inputName : /.*/,
      "inputAddress": (req.body.inputAddress) ? req.body.inputAddress : /.*/,
      "inputEmail": (req.body.inputEmail) ? req.body.inputEmail : /.*/,
      "inputPhone": (req.body.inputPhone) ? req.body.inputPhone : /.*/
    })
      .then((results) => {
        if (results.length > 0) {
          resultsFound.data = results;
          res.send(resultsFound);
        } else {
          return res.send(resultsNotFound);
        }
      });
  },
  getHost: function (req, res) {
    return Host.find({ _id: req.body._id })
      .then((results) => {
        if (results.length > 0) {
          resultsFound.data = results;
          res.send(resultsFound);
        } else {
          return res.send(resultsNotFound);
        }
      });
  },
  setGuest: function (req, res) {
    let guest = new Guest({
      inputName: req.body.inputName, inputAddress: req.body.inputAddress, inputEmail: req.body.inputEmail,
      inputPhone: req.body.inputPhone,
      inputComments: req.body.inputComments
    });
    guest.save();
    return res.send(resultsFound);
  },
  updateGuest: function (req, res) {
    return Guest.updateOne({ _id: req.body._id }, req.body, { upsert: true, setDefaultsOnInsert: true }).then((results) => {
      if (results) {
        res.send(resultsFound);
      } else {
        return res.send(resultsNotFound);
      }
    });
  },
  deleteGuest: function (req, res) {
    return Guest.deleteOne({ _id: req.body._id }).then((results) => {
      if (results) {
        console.log("res")
        console.log(results)
        res.send(resultsFound);
      } else {
        return res.send(resultsNotFound);
      }
    });
  },
  getGuests: function (req, res) {
    return Guest.find({
      "inputName": (req.body.inputName) ? req.body.inputName : /.*/,
      "inputAddress": (req.body.inputAddress) ? req.body.inputAddress : /.*/,
      "inputEmail": (req.body.inputEmail) ? req.body.inputEmail : /.*/,
      "inputPhone": (req.body.inputPhone) ? req.body.inputPhone : /.*/
    })
      .then((results) => {
        if (results.length > 0) {
          resultsFound.data = results;
          res.send(resultsFound);
        } else {
          return res.send(resultsNotFound);
        }
      });
  },
  getGuest: function (req, res) {
    return Guest.find({ _id: req.body._id })
      .then((results) => {
        if (results.length > 0) {
          resultsFound.data = results;
          res.send(resultsFound);
        } else {
          return res.send(resultsNotFound);
        }
      });
  },
  setRegister: function (req, res) {
    let register = new Register({
      hostId: req.body.hostId, hostName: req.body.hostName, guestId: req.body.guestId,
      guestName: req.body.guestName,
      checkInDTTM: req.body.checkInDTTM,
      purpose: req.body.purpose
    });
    register.save();
    return res.send(resultsFound);
  },
  getRegister: function (req, res) {
    if(req.body.srchType == "guest") {
      return Register.find({ "guestId": req.body._id })
      .then((results) => {
        if (results.length > 0) {
          resultsFound.data = results;
          res.send(resultsFound);
        } else {
          return res.send(resultsNotFound);
        }
      });
    } else {
      return Register.find({ "hostId": req.body._id })
      .then((results) => {
        if (results.length > 0) {
          resultsFound.data = results;
          res.send(resultsFound);
        } else {
          return res.send(resultsNotFound);
        }
      });
    }
  }
};