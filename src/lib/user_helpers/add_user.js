const request = require('superagent');

const addUser = (user, callback) => {
  request
   .post('/user')
   .set('Content-Type', 'application/json')
   .send(user)
   .end((err, res) => {
     callback(err, res.rows[0].id);
   });
};

module.exports = {
  addUser,
};
