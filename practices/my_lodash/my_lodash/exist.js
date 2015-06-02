var each = require('./each.js');
var reduce = require('./reduce.js');

function exist(collection,num) {
    var result = false;
    each(collection,function (val) {
        if (val === num) {
            result = true;
        }
    });
    return result;
}

module.exports = exist;
