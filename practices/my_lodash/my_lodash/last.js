var each = require('./each.js');
var filter_in = require('./filter_in.js');
var reduce = require('./reduce.js');

function last(collection,func) {
    var result = collection;
    if (func !== undefined) {
        result = filter_in(collection, func);
    }
    var last_item;
    reduce(result,function (num_a,num_b) {
        last_item = num_b;
    });

    return last_item;
}

/*
function get_even(result,num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(last([1,2,3,4,5,6,7,8,9],get_even));
*/

module.exports = last;
