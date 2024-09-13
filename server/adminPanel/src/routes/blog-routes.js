const blogController = require("../controllers/blog-controller");
const upload = require("../config/multer");

const express = require("express");
const router = express.Router();

router.get("/getAllBlogs", blogController.getAllBlogs);
router.get("/getBlogById/:id", blogController.getBlogById);
router.post("/addBlog",upload.single("image"), blogController.addBlog);
router.post("/updateBlog", blogController.updateBlog);
router.delete("/deleteBlog/:id", blogController.deleteBlog);

module.exports = router;
