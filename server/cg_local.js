// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "bdguser",
//   database: "bdg_2019",
//   password: "Cid2019."
// });

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "bgd_2019",
  password: ""
});



module.exports = connection;
