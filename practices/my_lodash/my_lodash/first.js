var each = require('./each.js');
var filter_in = require('./filter_in.js');
var reduce = require('./reduce.js');

function first(collection, func) {
    var result = collection;
    if (func !== undefined) {
        result = filter_in(collection, func);
    }
    var first_item;
    reduce(result,function (num_a,num_b) {
        first_item = num_a;
        return num_a;
    });

    return first_item;
}

/*
function get_even(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(first([1,2,3,4,5,6,7,8,9],get_even));
*/
module.exports = first;
