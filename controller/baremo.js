const _db = require('../model/_db');
let validator = require('validatorjs');

module.exports = {   
    setBaremo: function (cb) {
        _db.get('institutions', function (data) {
            return cb({
                'message': data,
                'status': 200
            });
        });
    },  
}