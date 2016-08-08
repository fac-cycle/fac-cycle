require('env2')('config.env');
const Hapi = require('hapi');
const plugins = require('./plugins');
const routes = require('./routes');
require('colors');


// Create server instance
const server = new Hapi.Server();

// Set server connection
server.connection({ port: process.env.PORT || 3000 });

// Register server plugins, routes etc
server.register(plugins, registerError => {
  if (registerError) throw registerError;

  // Register routes
  server.route(routes);

  // Start server
  server.start(startError => {
    if (startError) throw startError;
    // eslint-disable-next-line no-console
    console.log(`Sever running at ${server.info.uri}`.cyan);
  });
});

module.exports = server;
