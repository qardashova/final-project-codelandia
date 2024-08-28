const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    return res.sendStatus(400);
  }
  jwt.verify(token, "my_secret-key", (err, user) => {
    if (err) {
      return res.sendStatus(401);
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = authenticateUser