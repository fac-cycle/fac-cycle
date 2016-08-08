const pg = require('pg');

const pgClient = (connection) => {
  const connectionString = process.env.DATABASE_URL || connection;
  const client = new pg.Client(connectionString);
  client.connect((err) => {
    if (err) {
      console.log(err);
    }
  });
  return client;
};

module.exports = pgClient;
