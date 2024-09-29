const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");

const getAllColors = async () => {
  const res = await pool.query("Select * from colors");
  return successResult("", res.rows);
};

const getAllSizes = async () => {
  const res = await pool.query("Select * from sizes");
  return successResult("", res.rows);
};

const getAllCategories = async () => {
  const res = await pool.query("Select * from categories");
  return successResult("", res.rows);
};

module.exports = { getAllColors, getAllSizes, getAllCategories };
