const Pool = require('pg').Pool;
const url = require('url');

const URL = process.env.DB_URL || 'postgresql://:@localhost:5432/testdb';

const params = url.parse(URL);
const auth = params.auth.split(':');
const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true,
};

const pool = new Pool(config);

module.exports = pool;
