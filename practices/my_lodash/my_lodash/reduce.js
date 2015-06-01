var each = require('./each.js');

function reduce(collection,func) {
    var temp;
    each(collection,function (item,i) {
        if (i === 0) {
            temp = item;
        }else{
            temp = func(temp,item);
        }
    });
}

module.exports = reduce;
