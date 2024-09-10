const authRoute = require("./auth-routes");
const userRoute = require("./user-routes");
const productRoute = require("./product-routes");
const blogRoute = require("./blog-routes");
const contactRoute = require("./contact-routes");
const parametricRoute = require("./parametric-routes");
const faqRoute = require("./faq-routes");
const authMiddleware = require("../middleware/auth-middleware");

const express = require("express");
const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", authMiddleware, userRoute);
router.use("/products", authMiddleware, productRoute);
router.use("/blogs", authMiddleware, blogRoute);
router.use("/contact", contactRoute);
router.use("/parametric", parametricRoute);
router.use('/faq',authMiddleware,faqRoute)

module.exports = router;
