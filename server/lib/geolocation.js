const request = require('superagent');

const getGeoLocation = (postcode, callback) => {
  request
   .get(`https://api.postcodes.io/postcodes/${postcode}`)
   .end((err, res) => {
     callback(err, res.body.result);
   });
};

module.exports = {
  getGeoLocation,
};
