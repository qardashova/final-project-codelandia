const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");

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
    "Select * from faq where deleted = 0 and id = $1",
    [id]
  );
  return successResult("", res.rows[0]);
};

const addFAQ = async (faq) => {};

const updateFAQ = async (faq) => {};

const deleteFAQ = async (id) => {
  const res = await pool.query("Update users set deleted = $1 where id=$1", [
    id,
  ]);
  return res.rows[0];
};

module.exports = { getAllFAQ, getFAQById, addFAQ, updateFAQ, deleteFAQ };
