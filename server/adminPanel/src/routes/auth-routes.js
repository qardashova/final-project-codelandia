const authController = require("../controllers/auth-controller");
const express = require("express");
const router = express.Router();

router.post("/login", authController.login);

module.exports = router;