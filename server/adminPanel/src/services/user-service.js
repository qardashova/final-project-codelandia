const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");
const {
  DATA_ADDED_SUCCESSFULLY,
} = require("../validations/messages/base-messages");
const validatePassword = require("../validations/password-validation");
const validateUser = require("../validations/user-validation");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  const res = await pool.query("select * from users");
  return res.rows;
};

const getUserByUserName = async (username) => {
  const res = await pool.query("Select * from users u where u.username = $1", [
    username,
  ]);
  return res.rows[0];
};

const addUser = async (user) => {
  //TODO username validation
  const userValidationResult = validateUser(user);
  if (!userValidationResult.success) {
    return userValidationResult;
  }

  //TODO password validation
  const passwordValidationResult = validatePassword(user.password);
  if (!passwordValidationResult.success) {
    return passwordValidationResult;
  }

  //TODO Adding user to db after hasing the password
  user.password = bcrypt.hash(user.password, 10);
  await pool.query("call add_user($1,$2)", [user.username, user.password]);

  const addedUser = await getUserByUserName(user.username);

  return successResult(DATA_ADDED_SUCCESSFULLY, addedUser);
};

module.exports = {
  getAllUsers,
  getUserByUserName,
  addUser,
};
