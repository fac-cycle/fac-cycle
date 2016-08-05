// Handle user endpoint requests

module.exports = [
  {
    method: 'GET',
    path: '/user',
    handler: (request, reply) => {
      reply().code(200);
    },
  },
  {
    method: 'POST',
    path: '/user',
    handler: (request, reply) => {
      reply().code(201);
    },
  },
  {
    method: 'PUT',
    path: '/user',
    handler: (request, reply) => {
      reply().code(200);
    },
  },
];
