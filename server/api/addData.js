// api/addData.js
import pool from '~/services/db';

export default async (req, res) => {
//try to create a user on the db
  try {
    console.log(req);
    const { name, email, password } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return newUser;
  } catch (error) {
    console.error(error);
    return 'Error creating user on db';
  }
};

