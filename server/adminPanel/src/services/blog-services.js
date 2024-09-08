const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");
const {
  DATA_ADDED_SUCCESSFULLY,
  DATA_UPDATED_SUCCESSFULLY,
  DATA_DELETED_SUCCESSFULLY,
} = require("../validations/messages/base-messages");

const getAllBlogs = async () => {
  const res = await pool.query("SELECT * FROM get_all_blogs();");
  return successResult("", res.rows[0]);
};

const getBlogById = async (id) => {
  const res = await pool.query("Select * from GET_BLOG_BY_ID($1)", [id]);
  return successResult("", res.rows[0]);
};

const addBlog = async (blog) => {
  const res = await pool.query(
    "Insert into blogs(created_by,name,description) values ($1,$2,$3) RETURNING id",
    [blog.createdBy, blog.name, blog.description]
  );
  return successResult(DATA_ADDED_SUCCESSFULLY, res.rows[0]);
};

const updateBlog = async (blog) => {
  const res = await pool.query(
    `UPDATE blogs 
         SET name = $1, description = $2, updated_by = $3, updated_date = NOW()
         WHERE id = $4
         RETURNING id`,
    [blog.name, blog.description, blog.updatedBy, blog.id]
  );
  return successResult(DATA_UPDATED_SUCCESSFULLY, res.rows[0]);
};

const deleteBlog = async (id) => {
  await pool.query("UPDATE blogs SET deleted = $1 WHERE id = $1", [id]);
  return successResult(DATA_DELETED_SUCCESSFULLY, "");
};

module.exports = {
  getAllBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
};
