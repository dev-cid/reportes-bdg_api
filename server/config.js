var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '',
  user     : 'root',
  database : '',
  password : ''
});

module.exports = connection;
