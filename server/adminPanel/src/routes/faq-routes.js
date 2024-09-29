const faqController = require("../controllers/faq-controller");
const express = require("express");
const router = express.Router();

router.get("/getAllFAQ", faqController.getAllFAQ);
router.get("/getFAQById/:id", faqController.getFAQById);
router.post("/addFAQ", faqController.addFAQ);
router.post("/updateFAQ", faqController.updateFAQ);
router.delete("/deleteFAQ/:id", faqController.deleteFAQ);

module.exports = router;
