const pool = require('./dbconfig');


const getUsers = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM users',);
    return rows;
  } catch (error) {
    console.error('Error in the SQL query: ', error);
    throw error;
  }
};

module.exports = {
  getUsers
};