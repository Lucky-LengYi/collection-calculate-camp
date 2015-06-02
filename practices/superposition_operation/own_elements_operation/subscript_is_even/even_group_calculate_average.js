'use strict';

var filter = function(collection) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 === 1 && collection[i] % 2 === 0) {
            result[result.length] = collection[i];
        }
    }
    return result;
};

var even_group_calculate_average = function(collection){
    var array = filter(collection);
    var result =[];
    var result_even = {};

    for (var i = 0; i < array.length; i++) {
        result_even[(array[i]+'').length] = result_even[(array[i]+'').length] || [];
        result_even[(array[i]+'').length].push(array[i]);
    }
    for (var key in result_even) {
        var sum = 0;
        for (var x = 0; x < result_even[key].length; x++) {
            sum += result_even[key][x];
        }
        result[result.length] = Math.ceil(sum/result_even[key].length);
    }

    return result.length === 0 ? 0 : result ;
};
module.exports = even_group_calculate_average;
