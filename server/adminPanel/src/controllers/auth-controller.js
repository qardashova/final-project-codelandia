const LoginUser = require("../models/loginUser");
const authServices = require("../services/auth-service");
const {
  generateResponse,
  generateBaseResponse,
} = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const login = async (req, res) => {
  try {
    const user = new LoginUser(req.body);
    const result = await authServices.login(user);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = { login };
