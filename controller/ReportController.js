const _db = require("../model/_db");

module.exports = {
  create: function(req, cb) {
    _db.create_l("user_report", req, function(data) {
      return cb(data);
    });
  }
};
