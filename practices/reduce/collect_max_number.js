'use strict';

function collect_max_number(collection) {
    var max = collection[0];
    for (var i = 1; i < collection.length; i++) {
        max = collection[i] > max ? collection[i] : max;
    }

    return max;
}

module.exports = collect_max_number;
