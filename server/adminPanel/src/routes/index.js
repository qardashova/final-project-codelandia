const authRoute = require("./auth-routes");
const userRoute = require("./user-routes");
const productRoute = require("./product-routes");
const blogRoute = require("./blog-routes");

const express = require("express");
const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/blogs", blogRoute);

module.exports = router;
