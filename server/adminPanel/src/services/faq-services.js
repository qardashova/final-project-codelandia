const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");
const { DATA_ADDED_SUCCESSFULLY, DATA_UPDATED_SUCCESSFULLY } = require("../validations/messages/base-messages");

const getAllFAQ = async ({ search = null, limit = 10, page = 1 }) => {
  const res = await pool.query(`Select * from get_all_faq($1,$2,$3)`, [
    search,
    limit,
    page,
  ]);

  return successResult("", res.rows);
};

const getFAQById = async (id) => {
  const res = await pool.query(
    "Select question,answer from faq where deleted = 0 and id = $1",
    [id]
  );
  return successResult("", res.rows[0]);
};

const addFAQ = async (faq) => {
  try {
    const res = await pool.query("call add_faq($1,$2,$3)", [
      faq.question,
      faq.answer,
      faq.priority,
    ]);
    console.log(res);
    
    return successResult(DATA_ADDED_SUCCESSFULLY, res.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const updateFAQ = async (faq) => {
  try {
    const res = await pool.query("call update_faq($2,$3,$4)", [
      faq.id,
      faq.question,
      faq.answer,
      faq.priority,
    ]);
    return successResult(DATA_UPDATED_SUCCESSFULLY, res.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteFAQ = async (id) => {
  const res = await pool.query("Update users set deleted = $1 where id=$1", [
    id,
  ]);
  return res.rows[0];
};

module.exports = { getAllFAQ, getFAQById, addFAQ, updateFAQ, deleteFAQ };
