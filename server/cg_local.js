var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: "",
  user: "root",
  database: "bd_report_2019",
  password: ""
});

module.exports = connection;
