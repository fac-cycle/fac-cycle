const request = require('superagent');

const updateItems = (itemId, itemUpdate, callback) => {
  request
   .put('/item')
   .set('Content-Type', 'application/json')
   .query({ itemId })
   .send(itemUpdate)
   .end((err, res) => {
     callback(err, res.rows);
   });
};

module.exports = {
  updateItems,
};
