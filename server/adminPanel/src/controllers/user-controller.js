const User = require("../models/user");
const userServices = require("../services/user-service");
const generateResponse = require("../utils/response-generator");
const {
    INTERNAL_SERVER_ERROR,
  } = require("../validations/messages/status-messages");

const getAllUsers = async (req, res) => {
  try {
    const result = await userServices.getAllUsers();
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const addUser = async (req, res) => {
  try {
    const userDTO = new User(req.body);
    const result = await userServices.addUser(userDTO);
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userServices.deleteUser(userId);
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUser
};
