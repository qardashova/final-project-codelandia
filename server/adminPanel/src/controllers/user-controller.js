const User = require("../models/user");
const userServices = require("../services/user-service");
const generateResponse = require("../utils/response-generator");

const getAllUsers = async (req, res) => {
  const result = await userServices.getAllUsers();
  generateResponse(200, res, result);
};

const addUser = async (req, res) => {
  const userDTO = new User(req.body);
  const result = userServices.addUser(userDTO);
  generateResponse(200, res, result);
};

module.exports = {
  getAllUsers,
  addUser,
};
