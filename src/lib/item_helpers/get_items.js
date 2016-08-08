const request = require('superagent');

const getItems = (keyword, category, userId, itemId, callback) => {
  request
   .get('/item')
   .query({ keyword, category, userId, itemId })
   .end((err, res) => {
     callback(err, res.rows);
   });
};

module.exports = {
  getItems,
};
