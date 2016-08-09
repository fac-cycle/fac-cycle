const Hapi = require('hapi');
const jwtScheme = require('../../../server/auth/jwt');

const testServer = (options = {}) => {
  const method = 'GET';
  const path = '/';
  const handler = (request, reply) => reply('');
  const config = { auth: 'jwtStrategy' };

  const server = new Hapi.Server({ debug: false });
  server.connection();

  server.register(jwtScheme, () => {
    server.auth.strategy('jwtStrategy', 'jwt', options);
    server.route({ method, path, handler, config });
  });

  return server;
};

module.exports = testServer;
