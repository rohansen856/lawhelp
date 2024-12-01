require('dotenv').config();
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ritankar123@@',
  database: 'Ritankar_DBMS',
  port: 3306,
  ssl: false,
  timezone: 'UTC',
});


module.exports = pool;
