// Serve all static files from ../public
module.exports = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public',
      listing: true,
    },
  },
};
