const _db = require("../model/_db");

module.exports = {
  show_course_user: function(id, cb) {
    _db.procedure("CALL sp_certificate_head(?)",id, function(data) {
      return cb(data);
    });
  },

  create_admin: (usernam, cb)=>{
    console.log(usernam,"***")
    _db.query(`select id from mdl_user where username='${usernam}'`, function(data){
         if(data.message.length == 0){
            cb("Error")
         }else{
          _db.procedure("CALL sp_certificate_head(?)",data.message[0]['id'], function(data) {
            return cb(data);
          });
         }
    })
}
};
