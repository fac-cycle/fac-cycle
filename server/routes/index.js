const staticRoutes = require('./static_routes');
const userRoutes = require('./user_routes');
const itemRoutes = require('./item_routes');
const loginRoutes = require('./login_routes');

const getItems = require('../lib/get_items');

module.exports = [
  ...staticRoutes,
  ...userRoutes,
  ...itemRoutes,
  ...loginRoutes,
  {
    method: 'GET',
    path: '/test-protected',
    config: { auth: 'jwt' },
    handler(request, reply) {
      reply('it works');
    },
  },
  {
    method: 'GET',
    path: '/items',
    handler(request, reply) {
      getItems((err, res) => reply(err || res.rows));
    },
  },
];
