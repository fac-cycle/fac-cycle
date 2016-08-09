// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import fs from 'fs';

import { getUserDatabase } from '../../server/lib/get_user_database.js';
import { updateUserDatabase } from '../../server/lib/update_user_database.js';
import { addUserDatabase } from '../../server/lib/add_user_database.js';
import client from '../../server/lib/pg_client.js';

const sql = fs.readFileSync(`${__dirname}/../fixtures/schema.txt`).toString();

test.cb.before(t => {
  client.query(sql, (err) => {
    if (err) throw err;
    t.end();
  });
});

test.cb('adds user to database', t => {
  const fakeUser = {
    name: 'Rory',
    email: 'rory@rory.com',
    facebookId: '12345677',
    profileImgUrl: 'rory.jpg',
    postcode: 'E2 0SY',
  };
  addUserDatabase(client, fakeUser, (err, reply) => {
    t.is(reply.command, 'INSERT', 'Should return an insert command');
    t.end();
  });
});

test.cb('select user to database', t => {
  const fakeUser = {
    name: 'Anneka',
    email: 'anneka@anneka.com',
    facebookId: '12345678',
    profileImgUrl: 'anneka.jpg',
    postcode: 'E2 0SY',
  };
  const fakeResult = {
    id: null,
    name: 'Anneka',
    email: 'anneka@anneka.com',
    facebook_id: '12345678',
    profile_img_url: 'anneka.jpg',
    postcode: 'E2 0SY',
    lat: '51.5295460939963',
    lng: '-0.0423161603498166',
  };
  addUserDatabase(client, fakeUser, (addUserErr, addUserReply) => {
    fakeResult.id = addUserReply.rows[0].id;
    getUserDatabase(client, addUserReply.rows[0].id, (getUserErr, getUserReply) => {
      t.is(getUserReply.command, 'SELECT', 'Should return an select command');
      t.deepEqual(getUserReply.rows[0], fakeResult, 'Should return the fake user');
      t.end();
    });
  });
});

test.cb('update user to database', t => {
  const fakeUser = {
    name: 'Steve',
    email: 'steve@steve.com',
    facebookId: '12245678',
    profileImgUrl: 'steve.jpg',
    postcode: 'E2 0SY',
  };
  const fakeUpdate = {
    name: 'John',
    email: 'john@john.com',
  };
  const fakeResult = {
    id: null,
    name: 'John',
    email: 'john@john.com',
    facebook_id: '12245678',
    profile_img_url: 'steve.jpg',
    postcode: 'E2 0SY',
    lat: '51.5295460939963',
    lng: '-0.0423161603498166',
  };
  addUserDatabase(client, fakeUser, (addUserErr, addUserReply) => {
    fakeResult.id = addUserReply.rows[0].id;
    updateUserDatabase(client, addUserReply.rows[0].id, fakeUpdate,
      (updateUserErr, updateUserReply) => {
        t.is(updateUserReply.command, 'UPDATE', 'Should return an update command');
        getUserDatabase(client, addUserReply.rows[0].id, (getUserErr, getUserReply) => {
          t.deepEqual(getUserReply.rows[0], fakeResult, 'Should return the fake user');
          t.end();
        });
      });
  });
});
