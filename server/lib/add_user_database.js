const request = require('request');

const getGeoLocation = (postcode, callback) => {
  const base = 'https://api.postcodes.io/postcodes/';
  request(base + postcode, (err, response, body) => {
    if (err) callback(err);
    if (!err && response.statusCode === 200) {
      console.log(body);
      callback(err, body.result);
    }
  });
};

getGeoLocation('E2 0SY', () => {});
