'use strict';

function hybrid_operation(collection) {
    var sum = 0;
    for (var i = 0; i < collection.length; i++) {
        sum += collection[i] * 3 +2;
    }
    return sum;
}

module.exports = hybrid_operation;
