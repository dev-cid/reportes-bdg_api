var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '',
  user     : 'root',
  database : 'steammakers',
  password : ''
});

module.exports = connection;
