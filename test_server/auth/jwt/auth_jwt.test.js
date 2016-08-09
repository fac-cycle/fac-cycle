// eslint-disable-next-line import/no-extraneous-dependencies
const test = require('ava');
const jwt = require('jsonwebtoken');
require('env2')('../../../config.env');

const testServer = require('./test_server');

test.cb('basic auth test', t => {
  const server = testServer();
  const options = { method: 'GET', url: '/' };

  server.inject(options, response => {
    const { statusCode } = response;
    t.is(statusCode, 401, 'No Token should fail');
    t.end();
  });
});

test.cb('returns request.auth.credentials', t => {
  const validateCredentials = (credentials, cb) => cb(null, true);
  const server = testServer({ validateCredentials });

  const payload = { name: 'matt' };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  const headers = { Authorization: `Bearer ${token}` };
  const options = { method: 'GET', url: '/', headers };

  server.inject(options, response => {
    const { credentials } = response.request.auth;
    t.is(credentials.name, 'matt', 'No Token should fail');
    t.end();
  });
});

test.cb('expired token returns 400 error', t => {
  const validateCredentials = (credentials, cb) => {
    if (!credentials.expiry || credentials.expiry < Date.now()) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  };

  const server = testServer({ validateCredentials });

  const payload = { name: 'matt', expiry: Date.now() - 1000 };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  const headers = { Authorization: `Bearer ${token}` };
  const options = { method: 'GET', url: '/', headers };

  server.inject(options, response => {
    const { statusCode } = response;
    t.is(statusCode, 401, 'Expired token should fail');
    t.end();
  });
});


test.cb('unexpired token returns 200', t => {
  const validateCredentials = (credentials, cb) => {
    if (!credentials.expiry || credentials.expiry < Date.now()) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  };

  const server = testServer({ validateCredentials });

  const payload = { name: 'matt', expiry: Date.now() + 10000 };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  const headers = { Authorization: `Bearer ${token}` };
  const options = { method: 'GET', url: '/', headers };

  server.inject(options, response => {
    const { statusCode } = response;
    t.is(statusCode, 200, 'Valid token should pass');
    t.end();
  });
});
