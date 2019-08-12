const conn_local = require("../server/cg_local");
const conn_moodle = require("../server/cg_moodle");

module.exports = {
  /*Conexiones locales*/
  query_l: function(sql, cb) {
    conn_local.query(sql, function(err, results) {
      if (err)
        return cb({ message: "Error en el servidor: " + err, status: 500 });
      return cb({ message: results, status: 200 });
    });
  },

  get_l: function(tbl, cb) {
    let sql = `SELECT * FROM ${tbl}`;
    conn_local.query(sql, function(err, results) {
      if (err)
        return cb({ message: "Error en el servidor: " + err, status: 500 });
      return cb({ message: results, status: 200 });
    });
  },

  create_l: function(tbl, params, cb) {
    let string = "";
    let values = "";
    for (let index in params) {
      string += `${index},`;
      values += `'${params[index]}',`;
    }
    string = string.slice(0, -1);
    values = values.slice(0, -1);

    let sql = `INSERT INTO ${tbl} (${string}) VALUES(${values})`;
    conn_local.query(sql, function(err, results) {
      if (err)
        return cb({ message: "Error en el servidor: " + err, status: 500 });
      return cb({ message: "Creación exitosa", status: 200 });
    });
  },

  /*Conexiones a moodle*/
  query: function(sql, cb) {
    conn_moodle.query(sql, function(err, results) {
      if (err)
        return cb({ message: "Error en el servidor: " + err, status: 500 });
      return cb({ message: results, status: 200 });
    });
  }
};
