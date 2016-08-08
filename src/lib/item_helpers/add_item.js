const request = require('superagent');

const addItem = (item, callback) => {
  request
   .post('/item')
   .set('Content-Type', 'application/json')
   .send(item)
   .end((err, res) => {
     callback(err, res.rows[0].id);
   });
};

module.exports = {
  addItem,
};
