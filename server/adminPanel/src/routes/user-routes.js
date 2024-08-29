const userController = require("../controllers/user-controller");

const express = require("express");
const router = express.Router();

router.get("/getAllUsers", userController.getAllUsers);
router.get("/addUser", userController.addUser);

module.exports = router;
