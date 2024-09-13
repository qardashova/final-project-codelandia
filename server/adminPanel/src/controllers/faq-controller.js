const {
  generateResponse,
  generateBaseResponse,
} = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const faqServices = require("../services/faq-services");
const FAQ = require("../models/faq");

const getAllFAQ = async (req, res) => {
  try {
    const search = req.query.search;
    const limit = req.query.limit;
    const page = req.query.page;
    const result = await faqServices.getAllFAQ({ search, limit, page });
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getFAQById = async (req, res) => {
  try {
    const faqId = req.params.id;
    const result = await faqServices.getFAQById(faqId);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const addFAQ = async (req, res) => {
  try {
    const faq = new FAQ(req.body);
    const result = await faqServices.addFAQ(faq);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const updateFAQ = async (req, res) => {
  try {
    const faq = new FAQ(req.body);
    const result = await faqServices.updateFAQ(faq);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const deleteFAQ = async (req, res) => {
  try {
    const faqId = req.params.id;
    const result = await faqServices.deleteFAQ(faqId);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getAllFAQ,
  getFAQById,
  addFAQ,
  updateFAQ,
  deleteFAQ,
};
