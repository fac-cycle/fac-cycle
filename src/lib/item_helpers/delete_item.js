const request = require('superagent');

const deleteItem = (itemId, callback) => {
  request
   .delete('/item')
   .set('Content-Type', 'application/json')
   .query({ itemId })
   .end((err, res) => {
     callback(err, res);
   });
};

module.exports = {
  deleteItem,
};
