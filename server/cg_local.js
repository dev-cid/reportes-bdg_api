var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "bdguser",
  database: "bdg_2019",
  password: "Cid2019."
});


module.exports = connection;
