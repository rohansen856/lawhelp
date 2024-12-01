require('dotenv').config();
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'lawhelp',
  port: 3306,
  ssl: false,
  timezone: 'UTC',
});


module.exports = pool;
