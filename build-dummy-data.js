const pg = require('pg');
const fs = require('fs');

require('env2')('config.env');

const client = new pg.Client(process.env.DB_URL);

const log = console.log.bind(console);
const endClient = client.end.bind(client);

const sql = fs.readFileSync('./dummy_data.txt').toString();

client.connect();
client.query(sql)
      .then(log)
      .then(endClient)
      .catch(log);
