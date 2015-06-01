var each = require('./each.js');

function map(collection,func) {
    var result = [];
    each(collection,function (num) {
        result[result.length] = func(num);
    });
    return result;
}

module.exports = map;
