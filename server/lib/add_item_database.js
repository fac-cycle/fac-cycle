const pgClient = require('./pg_client');
const { getGeoLocation } = require('./geolocation');

function addItemDatabase(connection, item, callback) {
  const title = item.title;
  const description = item.description;
  const postcode = item.postcode;
  const category = item.category;
  const imageUrl = item.image_url;
  const userId = item.user_id;
  const client = pgClient(connection);
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
        client.end();
      }
    );
  });
}

module.exports = {
  addItemDatabase,
};
