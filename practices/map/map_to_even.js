'use strict';

function two_times(num) {
    return num * 2;
}

function map_to_even(collection){
    for (var i = 0; i < collection.length; i++) {
       collection[i] = two_times(collection[i]);
    }
    return collection;
}
module.exports = map_to_even;
