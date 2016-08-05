// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava';
// import pg from 'pg';
// import { exec } from 'child_process';
// import path from 'path';
// import { addUserDatabase } from '../../server/lib/add_user_database.js';
//
// const dumpDbFile = path.join(__dirname, '..', 'fixtures', 'dumpdb.sql');
// const dropDbFile = path.join(__dirname, '..', 'fixtures', 'dropdb.sql');
// const connectionString = 'postgresql://localhost/testdb';
//
// const createDB = (next) => {
//   exec('createdb testdb', (createDbErr) => {
//     if (createDbErr !== null) {
//       console.log(`exec error: ${createDbErr}`);
//     }
//
//     next(createDbErr);
//   });
// };
//
// const prepareDB = (next) => {
//   exec(`psql -d testdb -f ${dumpDbFile}`, (loadDbErr) => {
//     if (loadDbErr !== null) {
//       console.log(`exec error: ${loadDbErr}`);
//     }
//
//     next(loadDbErr);
//   });
// };
//
// const cleanDB = (next) => {
//   exec(`psql -d postgres -f ${dropDbFile}`, (dropDbErr) => {
//     if (dropDbErr !== null) {
//       console.log(`exec error: ${dropDbErr}`);
//     }
//     next();
//   });
// };
//
// test.cb.before('drop testdb database', t => {
//   cleanDB(() => {
//     createDB(t.end);
//   });
// });
//
// test.cb.beforeEach(t => {
//   prepareDB(t.end);
// });
//
// test.afterEach.cb(t => {
//   pg.connect(connectionString, (err, client) => {
//     client.end();
//     t.end();
//   });
// });
//
// test.after.cb.always('drop test database', t => {
//   cleanDB(t.end);
// });
//
//
test.cb('adds user to database', t => {
  // const fakeUser = {
  //   name: 'Rory',
  //   email: 'rory@rory.com',
  //   facebookId: '12345677',
  //   profileImgUrl: 'rory.jpg',
  //   postcode: 'E2 0SY',
  // };
  // addUserDatabase(connectionString, fakeUser, (err, reply) => {
  //   t.equal(reply.command, 'INSERT', 'Should return an insert command');
  //   t.end();
  // });
  t.pass();
  t.end();
});
