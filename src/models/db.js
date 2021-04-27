const { Pool } = require('pg');

const pool = new Pool({
    user: 'filatov',
    host: 'localhost',
    database: 'tests',
});

pool.connect();

module.exports = pool;

