// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import add from '../../src/lib/add';

test('environment works', t => {
  t.deepEqual([1, 2, 3], [1, 2, 3]);
});

test('add function loads and precompiles', t => {
  t.is(add(2, 4), 6);
});


