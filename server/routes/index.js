const staticRoutes = require('./static_routes');
const userRoutes = require('./user_routes');
const itemRoutes = require('./item_routes');
const loginRoutes = require('./login_routes');

module.exports = [
  ...staticRoutes,
  ...userRoutes,
  ...itemRoutes,
  ...loginRoutes,
  {
    method: 'GET',
    path: '/test-protected',
    config: { auth: 'jwt' },
    handler(req, reply) {
      reply('it works');
    },
  },
];
