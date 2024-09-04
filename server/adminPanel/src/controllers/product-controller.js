const generateResponse = require("../utils/response-generator");
const productServices = require("../services/product-service");
const {
    INTERNAL_SERVER_ERROR,
  } = require("../validations/messages/status-messages");


const getAllProducts = async (req, res) => {
  try {
    const result = await productServices.getAllProducts();
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const getProductById = async (req,res) =>{
  try {
    const productId = req.params.id;
    const result = await productServices.getProductById(productId);
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
}

const addProduct = async (req, res) => {
  try {
    const { product, productVariants } = req.body;
    const result = await productServices.addProduct(product, productVariants);
    generateResponse(200, res, result);
  } catch (error) {
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
};

const deleteProduct = async (req,res) => {
  try {
    const productId = req.params.id;
    const result = await productServices.deleteProduct(productId);
    generateResponse(200,res,result)
  } catch (error) {
    console.log(error);
    generateResponse(500, res, INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct
};
