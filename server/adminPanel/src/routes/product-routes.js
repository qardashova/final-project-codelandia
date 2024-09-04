const productController = require("../controllers/product-controller");
const express = require("express");
const router = express.Router();

router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProductById/:id", productController.getProductById);
router.post("/addProduct", productController.addProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
