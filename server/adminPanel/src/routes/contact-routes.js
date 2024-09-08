const contactController = require("../controllers/contact-controller");
const express = require("express");
const router = express.Router();

router.post("/addContact", contactController.addContact);

module.exports = router;
