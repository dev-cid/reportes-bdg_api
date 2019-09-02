const _db = require("../model/_db");

module.exports = {
  show_course_user: function(id, cb) {
    _db.query("CALL sp_certificate_body", function(data) {
      return cb(data);
    });
  }
};
