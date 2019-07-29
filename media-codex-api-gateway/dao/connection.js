const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'abc123',
  database : 'MediaCodex'
});

connection.connect();

module.exports = connection;