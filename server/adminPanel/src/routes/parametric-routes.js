const parametricController = require("../controllers/parametric-controller");
const express = require("express");

const router = express.Router();

router.get("/getAllColors", parametricController.getAllColors);
router.get("/getAllCategories", parametricController.getAllCategories);
router.get("/getAllSizes", parametricController.getAllSizes);

module.exports = router;
