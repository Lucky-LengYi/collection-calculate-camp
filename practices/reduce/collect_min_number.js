'use strict';

function collect_min_number(collection) {
    var min = collection[0];
    for (var i = 1; i < collection.length; i++) {
        min = collection[i] < min ? collection[i] : min;
    }

    return min;
}

module.exports = collect_min_number;
