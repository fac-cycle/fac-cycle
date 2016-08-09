// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import server from '../../server/index';

test('GET request on /user endpoint returns 200', t => {
  const option = {
    method: 'GET',
    url: '/user',
  };

  server.inject(option, (response) => {
    t.is(response.statusCode, 200);
  });
});

test('POST request on /user endpoint returns 201', t => {
  const option = {
    method: 'POST',
    url: '/user',
  };

  server.inject(option, (response) => {
    t.is(response.statusCode, 201);
  });
});

test('PUT request on /user endpoint returns 200', t => {
  const option = {
    method: 'PUT',
    url: '/user',
  };

  server.inject(option, (response) => {
    t.is(response.statusCode, 200);
  });
});


test('GET request on /item endpoint returns 200', t => {
  const option = {
    method: 'GET',
    url: '/item',
  };

  server.inject(option, (response) => {
    t.is(response.statusCode, 200);
  });
});

test('POST request on /item endpoint returns 201', t => {
  const option = {
    method: 'POST',
    url: '/item',
  };

  server.inject(option, (response) => {
    t.is(response.statusCode, 201);
  });
});

test('PUT request on /item endpoint returns 200', t => {
  const option = {
    method: 'PUT',
    url: '/item',
  };

  server.inject(option, (response) => {
    t.is(response.statusCode, 200);
  });
});

test('DELETE request on /item endpoint returns 200', t => {
  const option = {
    method: 'DELETE',
    url: '/item',
  };
  server.inject(option, (response) => {
    t.is(response.statusCode, 200);
  });
});
