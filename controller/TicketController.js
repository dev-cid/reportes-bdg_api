const _db = require("../model/_db");
const mail = require("../resource/mail");
const EmailTemplate = require("email-templates").EmailTemplate;
let validator = require("validatorjs");
let path = require("path");

module.exports = {
  create: function(req, cb) {
    var rules = {
      id_type: "required|numeric",
      name_type: "required",
      id_user: "required|numeric",
      username: "required",
      description: "required"
    };
    var result = new validator(req, rules);
    if (result.passes()) {
      _db.create_l("ticket", req, function(data) {
        return cb(data);
      });
    } else {
      return cb({
        message: JSON.stringify(result.errors.errors),
        status: 202
      });
    }
  },

  show: function(cb) {
    _db.get_l(`ticket`, function(data) {
      return cb(data);
    });
  },

  show_for_assign: function(id, cb) {
    _db.query_l(`SELECT * FROM ticket WHERE id_manager <> null`, function(
      data
    ) {
      return cb(data);
    });
  },

  show_for_user: function(id, cb) {
    _db.query_l(`SELECT * FROM ticket WHERE manager = ${id}`, function(data) {
      return cb(data);
    });
  },

  show_me: function(id, cb) {
    _db.query(`SELECT * FROM ticket WHERE id_user = ${id}`, function(data) {
      return cb({
        message: data,
        status: 200
      });
    });
  },

  show_one: function(id, cb) {
    _db.query_l(`SELECT * FROM ticket WHERE id = ${id}`, function(data) {
      return cb(data);
    });
  },

  show_detail: function(id, cb) {
    _db.query_l(
      `SELECT * FROM historic_tickets WHERE id_ticket = ${id}`,
      function(data) {
        return cb(data);
      }
    );
  },

  type_ticket: function(cb) {
    _db.get_l(`type_ticket`, function(data) {
      return cb(data);
    });
  },

  cohort: function(cb) {
    _db.query(
      `SELECT * FROM mdl_cohort WHERE visible = 1  ORDER BY name ASC`,
      function(data) {
        return cb(data);
      }
    );
  },

  subject: function(cb) {
    _db.query(
      `SELECT * FROM mdl_course_categories WHERE visible = 1 GROUP BY name ORDER BY name ASC`,
      function(data) {
        return cb(data);
      }
    );
  },

  create_historic: function(req, cb) {
    var rules = {
      id_ticket: "required|numeric",
      answer: "required",
      id_user: "required|numeric",
      username: "required"
    };
    var validate = new validator(req, rules);
    if (validate.passes()) {
      _db.create_l("historic_tickets", req, function(data) {
        if (data.status != 200) {
          return cb(data);
        } else {
          _db.query_l(
            `SELECT * FROM ticket WHERE id = ${req.id_ticket}`,
            async function(res) {
              const result = await mail.transporter();
              var templatesDir = path.resolve(__dirname, "../template");
              var template = new EmailTemplate(
                path.join(templatesDir, "response")
              );
              var params = {
                email: res.message[0].email_user,
                user: res.message[0].username,
                ticket: res.message[0].id
              };

              template.render(params, function(err, results) {
                if (err) {
                  return cb({
                    message: err,
                    status: 500
                  });
                }

                result.sendMail(
                  {
                    from: "Bachillerato Digital",
                    to: params.email,
                    subject: "Sistema de tickets",
                    html: results.html
                  },
                  function(error, info) {
                    if (error) {
                      cb({
                        message: error.message,
                        status: 500
                      });
                    } else {
                      cb({
                        message: "Respuesta guardada exitosamente",
                        status: 200
                      });
                    }
                  }
                );
              });
            }
          );
        }
      });
    } else {
      return cb({
        message: JSON.stringify(validate.errors.errors),
        status: 202
      });
    }
  }
};
