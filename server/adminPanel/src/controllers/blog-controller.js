const blogServices = require("../services/blog-services");
const generateResponse = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const getAllBlogs = async (req,res) => {
  try {
    const result = await blogServices.getAllBlogs();
    generateResponse(200, res, result);
  } catch (error) {
    console.log(error);
    generateResponse(200, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getAllBlogs,
};
