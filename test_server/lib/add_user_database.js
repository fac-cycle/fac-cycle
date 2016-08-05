// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import addUserDatabase from '../../server/lib/add_user_database.js';

test('finds correct latitude and longitude when given a postcode', t => {
  const postCode = 'E2 0SY';
  const answer = {
    longitude: -0.0423161603498166,
    latitude: 51.5295460939963,
  };
  addUserDatabase.getGeoLocation(postCode, (err, reply) => {
    t.equal(answer.longitude, reply.longitude);
    t.equal(answer.latitude, reply.latitude);
  });
});

test('adds user to database', t => {
  const fakeUser = {
    name: 'Rory',
    email: 'rory@rory.com',
    facebookId: '12345677',
    profileImgUrl: 'rory.jpg',
    postcode: 'E2 0SY',
  };
  addUserDatabase.addUserDatabase(fakeUser, (err, reply) => {
    t.equal(reply.command, 'INSERT', 'Should return an insert command');
    t.end();
  });
});
