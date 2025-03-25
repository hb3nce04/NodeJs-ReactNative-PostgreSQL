const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: DATABASENAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to Postgres database.'))
  .catch(err => console.error('Error when connecting to database:', err));

module.exports = pool;