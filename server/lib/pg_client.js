const pg = require('pg');
require('env2')('config.env');

const pgClient = () => {
  const connectionString = process.env.DATABASE_URL;
  const client = new pg.Client(connectionString);
  client.connect((err) => {
    if (err) {
      console.log(err);
    }
  });
  return client;
};

module.exports = pgClient;
