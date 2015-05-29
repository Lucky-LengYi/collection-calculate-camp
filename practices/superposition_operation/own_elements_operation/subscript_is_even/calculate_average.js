'use strict';
var calculate_average = function(collection){
    var sum = 0;
    for (var i = 0; i < collection.length; i++) {
       sum += collection[i];
    }
    var average = sum / collection.length;
    return average;
};
module.exports = calculate_average;
