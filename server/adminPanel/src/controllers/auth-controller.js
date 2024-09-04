const User = require("../models/user");
const authServices = require("../services/auth-service");
const generateResponse = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const login = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = authServices.login(user);
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(200, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = { login };
