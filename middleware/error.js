const winston = require("winston");

module.exports = function(err, req, res, next) {
  //log the exception
  winston.error(err.message, err);
  //login levels
  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send("Something Failed");
};
