const getGeoLocation = require('./geolocation');

const addUserDatabase = (client, user, callback) => {
  const name = user.name;
  const email = user.email;
  const facebookId = user.facebookId;
  const profileImgUrl = user.profileImgUrl;
  const postcode = user.postcode;
  getGeoLocation(postcode, (err, reply) => {
    const lat = reply.latitude;
    const lng = reply.longitude;
    client.query(
      `INSERT INTO users (name, email, facebook_id, profile_img_url, postcode, lat, lng)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id`,
      [name, email, facebookId, profileImgUrl, postcode, lat, lng],
      (postgresErr, result) => {
        if (postgresErr) {
          callback(postgresErr);
        } else {
          callback(postgresErr, result);
        }
      }
    );
  });
};

module.exports = {
  addUserDatabase,
};
