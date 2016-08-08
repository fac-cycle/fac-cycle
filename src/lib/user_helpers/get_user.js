const request = require('superagent');

const getUser = (userId, callback) => {
  request
   .get('/user')
   .query({ userId })
   .end((err, res) => {
     callback(err, res.rows[0]);
   });
};

module.exports = {
  getUser,
};
