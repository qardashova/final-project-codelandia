const jwt = require("jsonwebtoken");
const {
  BAD_REGUEST,
  UNAUTHORIZED,
} = require("../validations/messages/status-messages");
const { errorResult } = require("../utils/result-generators");
const { generateBaseResponse } = require("../utils/response-generator");
const dotenv = require("dotenv");

dotenv.config({ path:"../.env"})

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return generateBaseResponse(401, res, errorResult(UNAUTHORIZED));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return generateBaseResponse(401, res, errorResult(UNAUTHORIZED));
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = authenticateUser;
