const authScheme = require('./auth_scheme');

const jwtAuthPlugin = {
  register(server, options, next) {
    server.auth.scheme('jwt', authScheme);
    next();
  },
};

jwtAuthPlugin.register.attributes = {
  name: 'jwt-auth-plugin',
};

module.exports = jwtAuthPlugin;
