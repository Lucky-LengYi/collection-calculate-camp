'use strict';
var _ = require('../my_lodash/my_lodash.js');

function calculate_elements_sum(collection, element) {
    var subscript;
    var exist = true;
    _.each(collection,function (num,i) {
        if (num === element && exist) {
            subscript = i;
            exist = false;
        }
    });
    return subscript;
}

module.exports = calculate_elements_sum;
