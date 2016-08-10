const Pool = require('pg').Pool;
const url = require('url');
const env = require('env2');

env('../../config.env');

const buildConfig = () => {
  const URL = process.env.DB_URL;

  if (!URL) throw new Error('Environment variable DB_URL must be set');

  const params = url.parse(URL);
  const [username, password] = params.auth.split(':');

  const config = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
  };

  if (username) config.user = username;
  if (password) config.password = password;
  config.ssl = (config.host !== 'localhost');

  return config;
};

const pool = new Pool(buildConfig());

module.exports = pool;
