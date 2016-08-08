const querystring = require('querystring');
const superagent = require('superagent');

const jwt = require('jsonwebtoken');

const payload = facebookCode =>
  querystring.stringify({
    code: facebookCode,
    client_id: process.env.FB_CLIENT,
    client_secret: process.env.FB_SECRET,
    redirect_uri: `${process.env.BASE_URL}/welcome`,
  });


const getAccessToken = (code, callback) => {
  const qs = payload(code);
  const url = `https://graph.facebook.com/v2.3/oauth/access_token?${qs}`;
  superagent
    .get(url)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) callback(err);
      else callback(err, response.body.access_token);
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
    getAccessToken(request.query.code, (accessTokenError, accessToken) => {
      if (accessTokenError) throw accessTokenError;
      getUserDetails(accessToken, (userDetailsError, userDetails) => {
        if (userDetailsError) throw userDetailsError;

        const jwtpayload = {
          username: userDetails.name,
          facebookId: userDetails.id,
          accessToken,
        };

        const jsonWebToken = jwt.sign(jwtpayload, process.env.JWT_SECRET);

        reply.redirect(`/?jwt=${jsonWebToken}`);
      });
    });
  },
};

module.exports = welcome;
