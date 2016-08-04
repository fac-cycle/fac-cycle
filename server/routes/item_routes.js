// Handle user endpoint requests

module.exports = [
  {
    method: 'GET',
    path: '/item',
    handler: (request, reply) => {
      reply().code(200);  
    }
  },
  {
    method: 'POST',
    path: '/item',
    handler: (request, reply) => {
      reply().code(201);  
    }
  },
  {
    method: 'PUT',
    path: '/item',
    handler: (request, reply) => {
      reply().code(200);  
    }
  },
  {
    method: 'DELETE',
    path: '/item',
    handler: (request, reply) => {
      reply().code(200);  
    }
  },
];

