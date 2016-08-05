const staticRoutes = require('./static_routes');
const userRoutes = require('./user_routes');
const itemRoutes = require('./item_routes');

module.exports = [
  staticRoutes,
  ...userRoutes,
  ...itemRoutes,
];
