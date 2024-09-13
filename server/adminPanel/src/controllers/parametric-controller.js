const parametricServices = require("../services/parametric-service");
const {
  generateResponse,
  generateBaseResponse,
} = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const getAllColors = async (req, res) => {
  try {
    const result = await parametricServices.getAllColors();
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getAllSizes = async (req, res) => {
  try {
    const result = await parametricServices.getAllSizes();
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await parametricServices.getAllCategories();
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getAllColors,
  getAllSizes,
  getAllCategories,
};
