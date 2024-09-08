const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");
const {
  DATA_ADDED_SUCCESSFULLY,
} = require("../validations/messages/base-messages");

const addContact = async (data) => {
  await pool.query(
    `Insert into contact (name,email,phone,message) values($1,$2,$3,$4)`,
    [data.name, data.email, data.phone, data.message]
  );
  return successResult(DATA_ADDED_SUCCESSFULLY);
};

module.exports = {
  addContact,
};
