var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "bachilleratodb-cluster.cluster-cvmfjgowcxdo.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "bachillerato",
  database: "bachillerato_db",
  password: "hoo!f4naed7iuj,ah&Me"
});

/*var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "bachilleratodb-reader.cvmfjgowcxdo.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "bachillerato",
  database: "bachillerato_db",
  password: "hoo!f4naed7iuj,ah&Me"
});*/

module.exports = connection;

// const { Client } = require("pg");
// const connection = {
//   host:
//     "redshift-cluster-reportes.cinpng3dutww.us-east-1.redshift.amazonaws.com",
//   port: "5439",
//   user: "awsuser",
//   database: "dev",
//   password: "B4ch1ll3r470clu573r"
// };

// const client = new Client(connection);
// client.connect();

// module.exports = client;
