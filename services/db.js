
// db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'ludvik',
  password: 'Password123#@!',
  database: 'mydatabase',
});

export default pool;




