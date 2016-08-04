// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import id from '../../server/lib/test.js';

test('id function returns provided value', t => {
  t.is(id(10), 10);
});
