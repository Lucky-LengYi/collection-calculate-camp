'use strict';

function compute_average(collection) {
    var _ = require('../lodash');
    
    var sum = _.sum(collection);
    var average = sum/collection.length;
    return average;
}

module.exports = compute_average;
