const Blog = require("../models/blog");
const blogServices = require("../services/blog-services");
const {
  generateResponse,
  generateBaseResponse,
} = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const getAllBlogs = async (req, res) => {
  try {
    const search = req.query.search;
    const limit = req.query.limit;
    const page = req.query.page;
    const result = await blogServices.getAllBlogs({ search, limit, page });
    generateResponse(res, result);
  } catch (error) {
    console.log(error);
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await blogServices.getBlogById(blogId);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const addBlog = async (req, res) => {
  try {
    const userId = req.user.userId;
    const blog = new Blog(req.body);
    const image = req.file?.filename;

    const result = await blogServices.addBlog({
      createdBy: userId,
      image,
      ...blog,
    });
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const updateBlog = async (req, res) => {
  try {
    const userId = req.user.userId;
    const image = req.file?.filename;
    const updatedBlog = req.body;
    const result = await blogServices.updateBlog({
      updatedBy: userId,
      image,
      ...updatedBlog,
    });
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await blogServices.deleteBlog(blogId);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
};
