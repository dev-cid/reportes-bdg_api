const _db = require('../../model/_db');
const mail = require('../../resource/mail');
var path = require('path');

const EmailTemplate  = require('email-templates').EmailTemplate;
let rules = require('validatorjs');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');



module.exports = {
    login: function (req, cb) {
        _db.query(`SELECT * FROM users WHERE user = '${req.params.user}'`, function (results) {
            if (results.length == 0) return cb({
                'message': 'No se encontró el usuario',
                'status': 404
            });
            var passwordIsValid = bcrypt.compareSync(req.params.password, results[0].password);
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
        "from": req.params.from,
        "to": req.params.to,
        "subject": req.params.subject,
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
    register: function (req, cb) {
        var rules_user = {
            user: 'required',
            password: 'required|min:6|max:16'
        }
        var result = new rules(req.params, rules_user);
        if (result.passes()) {
            _db.create('users', req.params, function (data) {
                return cb({
                    'message': data,
                    'status': 200
                });
            });
        } else {
            return cb({
                'message': result.errors.errors,
                'status': 200
            });
        }
    },
}