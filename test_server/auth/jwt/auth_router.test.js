require('env2')('../../../config.env');

process.env.PORT = 3333;

// eslint-disable-next-line import/no-extraneous-dependencies
const test = require('ava');
const jwt = require('jsonwebtoken');
const server = require('../../../server');


test.cb('protected route returns 404 if called without web token', t => {
  const options = { method: 'GET', url: '/test-protected' };

  server.inject(options, response => {
    const { statusCode } = response;
    t.is(statusCode, 401, 'No Token should fail');
    t.end();
  });
});


test.cb('protected route returns 404 if called without web token', t => {
  const payload = { expiryDate: Date.now() + 10 };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  const headers = { Authorization: `Bearer ${token}` };
  const options = { method: 'GET', url: '/test-protected', headers };

  server.inject(options, response => {
    const { statusCode } = response;
    t.is(statusCode, 200, 'Valid token should pass');
    t.end();
  });
});
