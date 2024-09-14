const User = require("../models/user");
const userServices = require("./user-service");
const { errorResult, successResult } = require("../utils/result-generators");
const {
  USER_NOT_FOUND,
  USER_PASSWORD_INCORRECT,
} = require("../validations/messages/user-messages");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  generateNotNullEror,
} = require("../validations/messages/base-messages");
const dotenv = require("dotenv");

dotenv.config({ path:"../.env"})
/**
 * @param {User} user
 */

const login = async (user) => {
  if (!user.username || !user.password) {
    return errorResult(generateNotNullEror(`Username or Password`));
  }

  //TODO check user is exists or not
  const existingUser = await userServices.getUserByUserName(user.username);

  if (!existingUser) {
    return errorResult(USER_NOT_FOUND);
  }

  //TODO check password is correct or not

  const passwordCheckingResult = await bcrypt.compare(
    user.password,
    existingUser.password
  );
  if (!passwordCheckingResult) {
    return errorResult(USER_PASSWORD_INCORRECT);
  }
  //TODO create token
  const token = jwt.sign(
    { userId: existingUser.id, username: existingUser.username },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
  const expireDate = new Date();
  expireDate.setHours(expireDate.getHours() + 1);
  return successResult("", { token, expireDate });
};

module.exports = {
  login,
};
