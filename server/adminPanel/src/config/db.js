const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = pool;
