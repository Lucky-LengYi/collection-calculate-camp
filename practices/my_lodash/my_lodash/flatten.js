var each = require('./each.js');

function flatten(collection) {
    var result = [];
    each(collection,function (item,i) {
        if (item.length === undefined) {
            result[result.length] = item;
        }

        for (var x = 0;item.length !== undefined && x < item.length; x++) {
            if (item[x].length === undefined) {
                result[result.length] = item[x];
            }
        }
    });
    return result;
}

// var a = [1,[2,3],4,5,[6,7,8]];
//
// console.log(flatten(a));

module.exports = flatten;
