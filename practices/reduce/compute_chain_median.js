'use strict';
var _ = require('../my_lodash/my_lodash.js');
function compute_chain_median(collection) {

    var result = collection.split("->");
    for (var i = 0; i < result.length; i++) {
        result[i] = parseInt(result[i]);
    }
    var median;
    result = _.bubble_sort(result);
    if (result.length%2 === 0) {
        median = (result[result.length/2] + result[result.length/2-1])/2;
    }else {
        median = result[result.length/2-0.5];
    }
    return median;
}

module.exports = compute_chain_median;
