const config = require("config");
const express = require("express");

module.exports = function() {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR : jwtPrivateKey is noted defined");
  }
};
