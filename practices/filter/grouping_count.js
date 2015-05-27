'use strict';

function grouping_count(collection) {
    var array = {};

    for (var i = 0; i < collection.length; i++) {
      array[collection[i]] = array[collection[i]] || 0;
      array[collection[i]]++;
    }

    return array;
}

module.exports = grouping_count;
