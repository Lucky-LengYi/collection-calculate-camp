'use strict';

function get_three_times(array,num) {
    if (num%3 === 0) {
        array[array.length](num);
    }
    return array;
}

function choose_multiples_of_three(collection) {
    var array = [];

    for (var i = 0; i < collection.length; i++) {
        array = get_three_times(array,collection[i]);
    }
    return array;
}

module.exports = choose_multiples_of_three;
