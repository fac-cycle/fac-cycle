const request = require('superagent');

const updateUser = (userId, userUpdate, callback) => {
  request
   .put('/user')
   .set('Content-Type', 'application/json')
   .query({ id: userId })
   .send(userUpdate)
   .end((err, res) => {
     callback(err, res);
   });
};

module.exports = {
  updateUser,
};
