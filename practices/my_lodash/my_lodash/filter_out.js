var each = require('./each.js');

function filter_out(collection,func) {
    var result = [];
    each(collection,function (num) {
        if (!func(num)) {
            result[result.length] = num;
        }
    });
    return result;
}

module.exports = filter_out;

/*
function get_even(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

var collection = [1,2,3,4,5,6,7,8,9];

console.log(filter_out(collection,get_even));
*/
