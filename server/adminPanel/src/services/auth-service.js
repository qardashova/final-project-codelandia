const User = require("../models/user");
const userServices = require("./user-service");
const { errorResult, successResult } = require("../utils/result-generators");
const {
  USER_NOT_FOUND,
  USER_PASSWORD_INCORRECT,
} = require("../validations/messages/user-messages");
const bcrypt = require("bcrypt");
require("dotenv").config();
/**
 * @param {User} user
 */

const login = async (user) => {
  //TODO check user is exists or not
  const existingUser = await userServices.getUserByUserName(user);

  if (!existingUser) {
    return errorResult(USER_NOT_FOUND);
  }

  //TODO check password is correct or not
  const passwordCheckingResult = bcrypt.compare(
    user.password,
    existingUser.password
  );

  if (!passwordCheckingResult) {
    return errorResult(USER_PASSWORD_INCORRECT);
  }

  //TODO create token
  const token = jwt.sign(
    { username: existingUser.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );
  const expireDate = new Date();
  expireDate.setHours(expireDate.getHours() + 1);

  return {
    token,
    expireDate,
  };
};

module.exports = {
  login,
};
