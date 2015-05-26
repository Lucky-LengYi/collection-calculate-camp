'use strict';

function compute_average(collection) {
    var _ = require('../lodash');

    var sum = 0;
    for (var i = 0; i < collection.length; i++) {
        sum = sum + collection[i];
    }
    var average = sum/collection.length;
    return average;
}

module.exports = compute_average;
