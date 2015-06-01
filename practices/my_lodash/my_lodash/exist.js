var each = require('./each.js');
var reduce = require('./reduce.js');

function exist(collection,num) {
    var result = false;
    var item = num;
    reduce(collection,function (num_a,num_b) {
        if (num_a === item || num_b === item) {
            result = true;
        }
    });
    return result;
}

module.exports = exist;
