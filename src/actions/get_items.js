const request = require('superagent');

const getItems = (keyword, category, userId, itemId, callback) => {
  request
   .get('/item')
   .query({ keyword, category, userId, itemId })
   .end((err, res) => {
     callback(err, res.rows);
   });
};

module.exports = (state, action) => {
  getItems(action.keyword, action.category, null, null, (err, response) => {
    action.end({
      itemsArray: response,
    });
  });
};
