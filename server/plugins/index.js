const Inert = require('inert');
const AuthJWT = require('../auth/jwt');

module.exports = [
  Inert,            // Plugin for static assets
  AuthJWT,          // Plugin to load jwt auth scheme and strategy
];
