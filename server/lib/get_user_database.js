const pgClient = require('./pg_client');


const getUserDatabase = (connection, userId, callback) => {
  const client = pgClient(connection);
  client.query(
      `SELECT * FROM users
       WHERE id = $1`,
      [userId],
    (postgresErr, result) => {
      if (postgresErr) {
        callback(postgresErr);
      } else {
        callback(postgresErr, result);
      }
      client.end();
    }
    );
};

module.exports = {
  getUserDatabase,
};
