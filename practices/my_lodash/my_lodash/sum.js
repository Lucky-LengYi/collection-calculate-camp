var each = require('./each.js');
var reduce = require('./reduce.js');

function sum(collection) {
    var result;
    reduce(collection,function (num_a,num_b) {
        result = num_a + num_b;
        return result;
    });
    return result;
}

/*test
console.log(sum([1,2,3,4,5,6,7,8]));
*/
module.exports = sum;
