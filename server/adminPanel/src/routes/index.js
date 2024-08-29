const authRoute = require("./auth-routes");
const userRoute = require("./user-routes");

const express = require("express");
const router = express.Router();

router.use("/auth", authRoute);
router.use("/users", userRoute);

module.exports = router;
