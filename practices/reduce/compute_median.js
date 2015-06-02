'use strict';
var _ = require('../my_lodash/my_lodash.js');

function compute_median(collection) {
    var median;
    var result = _.bubble_sort(collection);
    if (result.length%2 === 0) {
        median = (result[result.length/2] + result[result.length/2-1])/2;
    }else {
        median = result[result.length/2-0.5];
    }
    return median;
}

module.exports = compute_median;
