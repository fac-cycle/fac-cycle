const querystring = require('querystring');

const query = querystring.stringify({
  client_id: process.env.FB_CLIENT,
  redirect_uri: `${process.env.BASE_URL}/welcome`,
});

const facebookAuthUrl = `https://www.facebook.com/dialog/oauth?${query}`;

const login = {
  method: 'GET',
  path: '/login',
  handler(request, reply) {
    reply.redirect(facebookAuthUrl);
  },
};

module.exports = login;
