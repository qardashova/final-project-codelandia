const blogController = require("../controllers/blog-controller");

const express = require("express");
const router = express.Router();

router.get("/getAllBlogs", blogController.getAllBlogs);

module.exports = router;
