const getGeoLocation = require('./geolocation');

function addItemDatabase(client, item, callback) {
  const { title, description, postcode, category } = item;
  const imageUrl = item.image_url;
  const userId = item.user_id;

  getGeoLocation(postcode, (err, reply) => {
    const lat = reply.latitude;
    const lng = reply.longitude;
    client.query(`
      INSERT INTO items
      (title, description, postcode, category, image_url, user_Id, lat, lng)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id;
      `, [title, description, postcode, category, imageUrl, userId, lat, lng],
      (postgresErr, result) => {
        if (postgresErr) {
          callback(postgresErr);
        } else {
          callback(postgresErr, result);
        }
      }
    );
  });
}

module.exports = {
  addItemDatabase,
};
