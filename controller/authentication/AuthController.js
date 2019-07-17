const _db = require('../../model/_db');
const mail = require('../../resource/mail');
const EmailTemplate  = require('email-templates').EmailTemplate;

var path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports = {
    login: function (req, cb) {
        _db.query(`SELECT * FROM users WHERE user = '${req.user}'`, function (results) {
            if (results.length == 0) return cb({
                'message': 'No se encontró el usuario',
                'status': 404
            });
            var passwordIsValid = bcrypt.compareSync(req.password, results[0].password);
            if (!passwordIsValid) return cb({
                'auth': false,
                'token': null,
                'status': 401
            });
            var token = jwt.sign({
                id: results[0].id,
                rol: results[0].rol,
                group: results[0].id_group
            }, config.secret, {
                expiresIn: 86400 // expira cada 24h
            });
            return cb({
                'auth': true,
                'token': token,
                'status': 200
            });
        });
    },
    resetPassword: async  function (req, cb) {

    var templatesDir = path.resolve(__dirname, '../../template');

    const result =  await mail.transporter();
    var template = new EmailTemplate(path.join(templatesDir, 'restore-password'));

    var params = {
        "from": req.from,
        "to": req.to,
        "subject": req.subject,
    }

    template.render(params, function(err, results) {
        if (err) {
          return console.error(err);
        }

          result.sendMail(
            {
                from: params.from,
                to:  params.to,
                subject:  params.subject,
                html: results.html
            }, function (error, info) {
            if (error) {
                cb(error.message);
            } else {
                cb('Envio de correo éxitoso');
            }
        });
      });
    },
}