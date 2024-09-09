const productServices = require("../services/product-service");
const {
  generateResponse,
  generateBaseResponse,
} = require("../utils/response-generator");
const {
  INTERNAL_SERVER_ERROR,
} = require("../validations/messages/status-messages");

const getAllProducts = async (req, res) => {
  try {
    const result = await productServices.getAllProducts();
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await productServices.getProductById(productId);
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getPriceByColorId = async (req, res) => {
  try {
    const colorId = req.query.colorId;
    const sizeId = req.query.sizeId;
    const productId = req.query.productId;
    const result = await productServices.getProductPriceByVariants({
      productId,
      colorId,
      sizeId,
    });
    generateResponse(res, result);
  } catch (error) {
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const addProduct = async (req, res) => {
  try {
    const { product, productVariants } = req.body;
    const result = await productServices.addProduct(product, productVariants);
    generateResponse(res, result);
  } catch (error) {
    console.log(error, "err");
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await productServices.deleteProduct(productId);
    generateResponse(res, result);
  } catch (error) {
    console.log(error);
    generateBaseResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  getPriceByColorId,
};
