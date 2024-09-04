const userController = require("../controllers/user-controller");

const express = require("express");
const router = express.Router();

router.get("/getAllUsers", userController.getAllUsers);
router.post("/addUser", userController.addUser);
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;
