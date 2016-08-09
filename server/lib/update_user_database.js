const getUserDatabase = require('./get_user_database').getUserDatabase;

const updateUserDatabase = (client, userId, updates, callback) => {
  getUserDatabase(client, userId, (getUserErr, getUserReply) => {
    if (getUserErr) {
      callback(getUserErr);
    } else {
      const user = getUserReply.rows[0];
      const { id, name, email, postcode, lat, lng } = Object.assign({}, user, updates);
      const facebookId = user.facebook_id;
      const profileImgUrl = user.profile_img_url;
      client.query(
          `UPDATE users
           SET name = $2, email = $3, facebook_id = $4, profile_img_url = $5,
           postcode = $6, lat = $7, lng = $8
           WHERE id = $1`,
          [id, name, email, facebookId, profileImgUrl, postcode, lat, lng],
          (postgresErr, result) => {
            if (postgresErr) {
              callback(postgresErr);
            } else {
              callback(postgresErr, result);
            }
          });
    }
  });
};

module.exports = {
  updateUserDatabase,
};
