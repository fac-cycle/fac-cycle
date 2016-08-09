const getUserDatabase = (client, userId, callback) => {
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
    }
    );
};

module.exports = {
  getUserDatabase,
};
