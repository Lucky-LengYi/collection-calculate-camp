'use strict';

function average_uneven(collection) {
    var sum = 0;
    var item = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 1) {
            sum += collection[i];
            item ++;
        }
    }
    var average = sum / item;
    return average;
}

module.exports = average_uneven;
