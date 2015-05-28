'use strict';

function find_first_even(collection) {
    var num;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            num = collection[i];
            break;
        }
    }
    return num;
}

module.exports = find_first_even;
