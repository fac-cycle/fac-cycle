const authScheme = require('./auth_scheme');

const validateCredentials = (credentials, cb) => {
  if (!credentials.expiryDate || credentials.Date < Date.now()) {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const jwtAuthPlugin = {
  register(server, options, next) {
    // Register auth scheme and strategy
    server.auth.scheme('jwt', authScheme);
    server.auth.strategy('jwt', 'jwt', { validateCredentials });
    next();
  },
};

jwtAuthPlugin.register.attributes = {
  name: 'jwt-auth-plugin',
};

module.exports = jwtAuthPlugin;
