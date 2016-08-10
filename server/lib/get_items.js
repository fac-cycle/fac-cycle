const client = require('./pg_client');

const getItems = (cb) => client.query('SELECT * FROM items', cb);

module.exports = getItems;
