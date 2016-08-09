// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import latLngMinMax from '../../server/lib/lat_lng_min_max.js';

test('finds correct min and max latitude and longitude for 5km around downing street', t => {
  const inputLatitude = 51.5032510;
  const inputLongitude = -0.1278950;
  const answer = {
    maxLatitude: 51.52586029332392,
    minLatitude: 51.480641706676074,
    maxlongitude: -0.09181652058894235,
    minlongitude: -0.16397347941105767,
  };
  t.deepEqual(answer, latLngMinMax(inputLatitude, inputLongitude, 5));
});
