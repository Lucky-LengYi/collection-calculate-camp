'use strict';
var calculate_average = function(collection){
    var sum = 0;
    var item = 0;
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 === 1) {
            sum += collection[i];
            item += 1;
        }
    }
    var average = sum / item;
    return average;
};
module.exports = calculate_average;
