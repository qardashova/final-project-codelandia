const jwt = require("jsonwebtoken");
const generateResponse = require("../utils/response-generator");
const {
  BAD_REGUEST,
  UNAUTHORIZED,
} = require("../validations/messages/status-messages");

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    return generateResponse(400, res, BAD_REGUEST);
  }
  jwt.verify(token, "my_secret-key", (err, user) => {
    if (err) {
      return res.sendStatus(401, res, UNAUTHORIZED);
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = authenticateUser;
