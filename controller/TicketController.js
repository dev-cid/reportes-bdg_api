const _db = require("../model/_db");
const mail = require("../resource/mail");
const EmailTemplate = require("email-templates").EmailTemplate;
const setupData = require("../resource/middleware");
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
    var result = new validator(req.body, rules);
    if (result.passes()) {
      _db.create_l("ticket", req.body, function(data) {
        if (data.status !== 200) {
          return cb(data);
        } else {
          _db.query_l(
            "SELECT id FROM ticket ORDER BY id desc LIMIT 1",
            function(res) {
              var id_ticket = res.message[0].id;

              return cb({
                message: `Creación exitosa`,
                status: 200,
                id_ticket: id_ticket
              });
            }
          );
        }
      });
    } else {
      return cb({
        message: JSON.stringify(result.errors.errors),
        status: 202
      });
    }
  },

  create_evidences: function(req, cb) {
    var rules = {
      id_ticket: "required|numeric"
    };
    var result = new validator(req.body, rules);
    if (result.passes()) {
      var array = req.files;
      var cont = 0;
      for (let index = 0; index < array.length; index++) {
        cont++;
        setupData(req, `bachilleratodigital`, "url", true, true, array[index]);
        _db.create_l("evidences", req.body, function() {});
      }
      return cb({
        message: `Creación exitosa, hemos subido ${cont} evidencias`,
        status: 200
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
    _db.query_l(
      `SELECT * FROM ticket WHERE id_user = ${id} ORDER BY status desc, id desc`,
      function(data) {
        return cb(data);
      }
    );
  },

  show_one: function(id, cb) {
    _db.query_l(`SELECT * FROM ticket WHERE id = ${id}`, function(data) {
      _db.query_l(`SELECT * FROM evidences WHERE id_ticket = ${id}`, function(
        x
      ) {
        data.new = x.message;
        return cb({
          message: data.message,
          status: 200,
          evidences: data.new
        });
      });
    });
  },

  show_detail: function(id, cb) {
    var array_historic = [];
    _db.query_l(
      `SELECT * FROM historic_tickets WHERE id_ticket = ${id} ORDER BY id DESC`,
      function(data) {
        data.message.forEach(element => {
          array_historic.push(element.id);
        });

        _db.query_l(
          `SELECT * FROM evidences_historic WHERE id_historic IN (${array_historic})`,
          function(x) {
            data.new = x.message;
            return cb({
              message: data.message,
              status: 200,
              evidences: data.new
            });
          }
        );
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
      `SELECT * FROM mdl_course_categories WHERE visible = 1 and depth = 2 GROUP BY name ORDER BY name ASC`,
      function(data) {
        return cb(data);
      }
    );
  },

  update_status: function(id, status, cb) {
    _db.query_l(
      `UPDATE ticket SET status = '${status}' WHERE id = ${id}`,
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

              if (
                params.email == undefined ||
                params.email == "" ||
                params.email == null
              ) {
                return cb({
                  message:
                    "La persona que creó el ticket no tiene correo registrado",
                  status: 202
                });
              }

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
                  function(error) {
                    if (error) {
                      return cb({
                        message: error.message,
                        status: 500
                      });
                    } else {
                      _db.query_l(
                        `UPDATE ticket SET status = 'Resuelto' WHERE id = ${
                          req.id_ticket
                        }`,
                        function(res) {
                          _db.query_l(
                            "SELECT id FROM historic_tickets ORDER BY id desc LIMIT 1",
                            function(res) {
                              var id_historic = res.message[0].id;

                              return cb({
                                message: `Respuesta guardada exitosamente`,
                                status: 200,
                                id_historic: id_historic
                              });
                            }
                          );
                        }
                      );
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
  },

  create_historic_evidences: function(req, cb) {
    var rules = {
      id_historic: "required|numeric"
    };
    var result = new validator(req.body, rules);
    if (result.passes()) {
      var array = req.files;
      var cont = 0;
      for (let index = 0; index < array.length; index++) {
        cont++;
        setupData(req, `bachilleratodigital`, "url", true, true, array[index]);
        _db.create_l("evidences_historic", req.body, function() {});
      }
      return cb({
        message: `Respuesta guardada con ${cont} evidencias`,
        status: 200
      });
    } else {
      return cb({
        message: JSON.stringify(result.errors.errors),
        status: 202
      });
    }
  }
};
