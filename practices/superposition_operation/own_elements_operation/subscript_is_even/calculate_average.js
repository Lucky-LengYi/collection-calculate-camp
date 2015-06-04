'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

var calculate_average = function(collection){
    var result = _.filter(collection,function (num , i) {
        return i % 2 === 1;
    });
    var sum = _.sum(result);
    return sum / result.length;
};
module.exports = calculate_average;
