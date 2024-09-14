const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path:"../.env"})

const pool = new Pool({
  // host: "localhost",
  // port: 5432,
  // user: "postgres",
  // password: 'react2002',
  // database: 'db_dashboard',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;
