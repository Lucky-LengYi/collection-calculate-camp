'use strict';

function get_even(array,num) {
    if (num%2 === 0) {
        array[array.length] = num;
    }
    return array;
}

function choose_even(collection) {
    var array = [];

    for (var i = 0; i < collection.length; i++) {
        array = get_even(array,collection[i]);
    }
    return array;
}

module.exports = choose_even;
