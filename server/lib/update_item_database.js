// import { getUserDatabase } from './get_user_database.js';

const pgClient = require('./pg_client');
const getItemDatabase = require('./get_user_database').getUserDatabase;

const updateItemDatabase = (connection, userId, updates, callback) => {
  const client = pgClient(connection);
  getItemDatabase(connection, userId, (getUserErr, getUserReply) => {
    if (getUserErr) {
      callback(getUserErr);
    } else {
      const user = getUserReply.rows[0];
      const updateFields = Object.keys(updates);
      updateFields.forEach((item, index) => {
        user[item] = updates[updateFields[index]];
      });
      const userIdToUpdate = user.id;
      const name = user.name;
      const email = user.email;
      const facebookId = user.facebook_id;
      const profileImgUrl = user.profile_img_url;
      const postcode = user.postcode;
      const lat = user.lat;
      const lng = user.lng;
      client.query(
          `UPDATE users
           SET name = $2, email = $3, facebook_id = $4, profile_img_url = $5,
           postcode = $6, lat = $7, lng = $8
           WHERE id = $1`,
          [userIdToUpdate, name, email, facebookId, profileImgUrl, postcode, lat, lng],
        (postgresErr, result) => {
          console.log(postgresErr);
          if (postgresErr) {
            callback(postgresErr);
          } else {
            callback(postgresErr, result);
          }
          client.end();
        });
    }
  });
};

module.exports = {
  updateItemDatabase,
};
