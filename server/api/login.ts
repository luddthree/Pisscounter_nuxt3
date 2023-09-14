// api/login.js
import pool from '~/services/db';

export default defineEventHandler (async (event) => {
  try {
    const [rows] = await pool.query('SELECT * FROM login');
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return { error: 'Database error' };
  }
});
