const jwt = require('jsonwebtoken');
var resultsNotFound = {
    "errorCode": 0,
    "errorMessage": "Server Error.",
    "rowCount": "0",
    "data": ""
  };

module.exports = {
    checkInputDataNULL: function(req, res) {
        if (!req.body) { console.log("no body checedin validate")}

        if (!req.body) return res.send(resultsNotFound);
    },
    checkInputDataQuality: function(req, res) {
        resultsNotFound["errorMessage"] = "There is no data submitted from Client.";
        if (!req.body.inputEmail) return res.send(resultsNotFound);
      },
    checkJWTToken: function(req, res) {
        const token = req.headers.token;
        if (!token) res.sendStatus(400);
        const decoded = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.JWT_SECRET,
        function(err, decoded) {
            if (err) {
                console.log("error is "  + err)
                resultsNotFound["errorMessage"] = "Your token in not valid, please logoff and login again.";
                return res.send(resultsNotFound);
            } else return true;
          }
        );
    }
  };