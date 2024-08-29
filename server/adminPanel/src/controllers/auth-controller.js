const User = require("../models/user");
const authServices = require("../services/auth-service");
const generateResponse = require("../utils/response-generator");

const login = async (req, res) => {
  const user = new User(req.body);
  const result = authServices.login(user);
  generateResponse(200, res, result);
};

module.exports = { login };
