const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");


const getAllBlogs = async()=>{
    const res = await pool.query('SELECT * FROM get_all_blogs();');
    return successResult("",res.rows[0]);
}

// const getBlogById = async ()=>{

// }

module.exports = {
    getAllBlogs,
    getBlogById
}