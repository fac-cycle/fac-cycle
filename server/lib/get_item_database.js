const getItemDatabase = (client, keywordInput,
  categoryInput, userIdInput, itemIdInput, callback) => {
  const obj = {
    category: categoryInput,
    user_id: userIdInput,
    id: itemIdInput,
  };

  const array = [];
  let partquerystring = '';
  let count = 1;
  // TODO: Refactor this - code should be more explicit
  // TODO: Consider issues with sql injection vulnerability
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null) {
      partquerystring += `${key} = $${count} AND `;
      count++;
      array.push(obj[key]);
    }
  });
  partquerystring = partquerystring.slice(0, -5);
  if (keywordInput !== null && partquerystring.length > 3) {
    partquerystring += `AND title LIKE $${count}`;
    array.push(`%${keywordInput}%`);
  } else if (keywordInput !== null && partquerystring.length < 3) {
    array.push(`%${keywordInput}%`);
    partquerystring = 'title LIKE $1';
  }
  const querystring = `SELECT * FROM items
   WHERE ${partquerystring}`;
  client.query(
      querystring,
      array,
    (postgresErr, result) => {
      if (postgresErr) {
        callback(postgresErr);
      } else {
        callback(postgresErr, result);
      }
      client.end();
    }
    );
};

module.exports = {
  getItemDatabase,
};
