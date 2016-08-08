// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
import pg from 'pg';
import { exec } from 'child_process';
import path from 'path';
import { addUserDatabase } from '../../server/lib/add_user_database.js';
import { getUserDatabase } from '../../server/lib/get_user_database.js';
import { updateUserDatabase } from '../../server/lib/update_user_database.js';

const dumpDbFile = path.join(__dirname, '..', 'fixtures', 'dumpdb.sql');
const dropDbFile = path.join(__dirname, '..', 'fixtures', 'dropdb.sql');
const connectionString = 'postgresql://localhost/testdb';

const createDB = (next) => {
  exec('createdb testdb', (createDbErr) => {
    if (createDbErr !== null) {
      console.log(`exec error: ${createDbErr}`);
    }

    next(createDbErr);
  });
};

const prepareDB = (next) => {
  exec(`psql -d testdb -f ${dumpDbFile}`, (loadDbErr) => {
    if (loadDbErr !== null) {
      console.log(`exec error: ${loadDbErr}`);
    }

    next(loadDbErr);
  });
};

const cleanDB = (next) => {
  exec(`psql -d postgres -f ${dropDbFile}`, (dropDbErr) => {
    if (dropDbErr !== null) {
      console.log(`exec error: ${dropDbErr}`);
    }
    next();
  });
};

test.cb.before('drop testdb database', t => {
  cleanDB(() => {
    createDB(t.end);
  });
});

test.cb.beforeEach(t => {
  prepareDB(t.end);
});

test.afterEach.cb(t => {
  pg.connect(connectionString, (err, client) => {
    client.end();
    t.end();
  });
});

test.after.cb.always('drop test database', t => {
  cleanDB(t.end);
});


test.cb('adds user to database', t => {
  const fakeUser = {
    name: 'Rory',
    email: 'rory@rory.com',
    facebookId: '12345677',
    profileImgUrl: 'rory.jpg',
    postcode: 'E2 0SY',
  };
  addUserDatabase(connectionString, fakeUser, (err, reply) => {
    t.pass(reply.command, 'INSERT', 'Should return an insert command');
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
  addUserDatabase(connectionString, fakeUser, (addUserErr, addUserReply) => {
    fakeResult.id = addUserReply.rows[0].id;
    getUserDatabase(connectionString, addUserReply.rows[0].id, (getUserErr, getUserReply) => {
      t.pass(getUserReply.command, 'SELECT', 'Should return an select command');
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
  addUserDatabase(connectionString, fakeUser, (addUserErr, addUserReply) => {
    fakeResult.id = addUserReply.rows[0].id;
    updateUserDatabase(connectionString, addUserReply.rows[0].id, fakeUpdate,
      (updateUserErr, updateUserReply) => {
        t.pass(updateUserReply.command, 'UPDATE', 'Should return an update command');
        getUserDatabase(connectionString, addUserReply.rows[0].id, (getUserErr, getUserReply) => {
          t.deepEqual(getUserReply.rows[0], fakeResult, 'Should return the fake user');
          t.end();
        });
      });
  });
});
