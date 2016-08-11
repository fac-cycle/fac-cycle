const querystring = require('querystring');
const superagent = require('superagent');
const { REDIRECT_ROOT } = require('../../lib/constants');

const jwt = require('jsonwebtoken');

const payload = facebookCode =>
  querystring.stringify({
    code: facebookCode,
    client_id: process.env.FB_CLIENT,
    client_secret: process.env.FB_SECRET,
    redirect_uri: `${process.env.BASE_URL}/welcome`,
  });

const getUserToken = (facebookToken) =>
  ({
    accessToken: facebookToken.access_token,
    expiryDate: Date.now() + (facebookToken.expires_in * 1000),
  });

const getAccessToken = (code, callback) => {
  const qs = payload(code);
  const url = `https://graph.facebook.com/v2.3/oauth/access_token?${qs}`;
  superagent
    .get(url)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) callback(err);
      else callback(null, getUserToken(response.body));
    });
};

const getUserDetails = (accessToken, callback) => {
  const userDetailsUrl = `https://graph.facebook.com/me?access_token=${accessToken}`;
  superagent
    .get(userDetailsUrl)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) callback(err);
      callback(null, response.body);
    });
};

const welcome = {
  method: 'GET',
  path: '/welcome',
  handler(request, reply) {
    getAccessToken(request.query.code, (accessTokenError, userToken) => {
      if (accessTokenError) throw accessTokenError;
      getUserDetails(userToken.accessToken, (userDetailsError, userDetails) => {
        if (userDetailsError) throw userDetailsError;

        const jwtpayload = Object.assign({
          username: userDetails.name,
          facebookId: userDetails.id,
        }, userToken);

        const jsonWebToken = jwt.sign(jwtpayload, process.env.JWT_SECRET);
        console.log('---->', REDIRECT_ROOT);
        reply.redirect(`${REDIRECT_ROOT}?jwt=${jsonWebToken}`);
      });
    });
  },
};

module.exports = welcome;
