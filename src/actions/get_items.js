const request = require('superagent');
const { SERVER_ROUTE } = require('../lib/constants');

const getItems = (keyword, category, userId, itemId, callback) => {
  request
   .get(`${SERVER_ROUTE}/items`)
   .query({ keyword, category, userId, itemId })
   .end((err, res) => {
     if (err) callback(err);
     else callback(err, res.rows);
   });
};

module.exports = (state, action) => {
  getItems(action.keyword, action.category, null, null, (err, response) => {
    action.end({
      itemsArray: response,
    });
  });
};
