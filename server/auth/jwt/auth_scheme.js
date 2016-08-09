const Boom = require('boom');
const jwt = require('jsonwebtoken');

const jwtScheme = (server, options) =>
  ({
    authenticate(request, reply) {
      // Get auth token from header
      const { authorization } = request.headers;
      const token = authorization && authorization.replace(/Bearer\s+/gi, '');

      jwt.verify(token, process.env.JWT_SECRET, (verificationError, credentials) => {
        if (verificationError) {  // Invalid token: respond unauthorized
          reply(Boom.unauthorized(null, 'Token'));
        } else {  // Verified token: validate credentials
          options.validateCredentials(credentials, (validationError, isValid) => {
            if (validationError || !isValid) {
              reply(Boom.unauthorized(null, 'Token'));
            } else {
              reply.continue({ credentials });
            }
          });
        }
      });
    },
  });

module.exports = jwtScheme;
