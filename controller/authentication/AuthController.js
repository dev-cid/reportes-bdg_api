const _db = require("../../model/_db");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var pass_ = require("node-php-password");

module.exports = {
  login: function(req, cb) {
    _db.query(
       ` SELECT u.id, u.email, u.firstname, if(rol.shortname = 'gestor_ticket',11, r.roleid) AS roleid, u.lastname, LOWER(REPLACE(TRIM(city), ' ', '_')) as 'city', u.username, password
         FROM mdl_role_assignments r
         JOIN mdl_user u ON r.userid = u.id
         JOIN mdl_role rol ON rol.id = r.roleid WHERE u.username = '${req.username}' 
         and u.confirmed = 1 and u.deleted = 0 and u.suspended = 0 AND r.roleid in (1,9,11,4,5) LIMIT 1
       `,
      function(results) {
        if (results.message.length == 0)
          return cb({
            message: "No se encontró el usuario",
            status: 404
          });

        var passwordIsValid = pass_.verify(
          req.password,
          results.message[0].password
        );
        if (!passwordIsValid)
          return cb({
            auth: false,
            token: null,
            status: 401
          });
        var token = jwt.sign(
          {
            id: results.message[0].id,
            rol: results.message[0].roleid,
            username: results.message[0].username,
            email: results.message[0].email
          },
          "secret",
          {
            expiresIn: 86400 // expira cada 24h
          }
        );
        return cb({
          auth: true,
          token: token,
          status: 200
        });
      }
    );
  }
};
