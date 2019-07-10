const connection = require('../server/conf');
var config = require('../server/config');

module.exports = {
    create: function (tbl, params, cb) {
        //params = JSON.parse(params);
        let string="";
        let values="";
        for (let index in params) {
            string+= `${index},`
            values+= `'${params[index]}',`
        }
        string = string.slice(0,-1);
        values = values.slice(0,-1);

        let sql = `INSERT INTO ${tbl} (${string}) VALUES(${values})`;
        console.log(sql);
        connection.query(sql, function (err, results) {
            if (err) return cb('Error en el servidor: ' + err);
            return cb('Creación exitosa');
        });
    },
    get: function (tbl,cb) {
        let sql = `SELECT * FROM ${tbl}`;
        connection.query(sql, function (err, results) {
            if (err) return cb('Error en el servidor: ' + err);
            return cb(results);
        });
    },
    update: function (tbl, params, id, cb) {
        params = JSON.parse(params);
        let string="";
        for (let index in params) {
            string+= `${index}='${params[index]}',` 
        }
        string = string.slice(0,-1);
        let sql = `UPDATE ${tbl} SET ${string} WHERE id = ${id}`;
        connection.query(sql, function (err, results) {
            if (err) return cb('Error en el servidor: ' + err);
            return cb('Actualización exitosa');
        });
    },
    delete: function (tbl, id, cb) {
        let sql = `UPDATE ${tbl} SET status = 0 WHERE id = ${id}`;
        connection.query(sql, function (err, results) {
            if (err) return cb('Error en el servidor: ' + err);
            return cb('Eliminado lógico exitoso');
        });
    },
    query: function (sql, cb) {
        connection.query(sql, function (err, results) {
            if (err) return cb('Error en el servidor: ' + err);
            return cb(results);
        });
    },
}