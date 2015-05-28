'use strict';
function no_repeat_number(array,num) {

    var exist = false;
    for (var i = 0; i < array.length; i++) {
        if (num === array[i]) {
            exist = true;
        }
    }
    if (!exist) {
        array[array.length] = num;
    }

    return array;
}

function choose_no_repeat_number(collection) {
    var array = [];

    for (var i = 0; i < collection.length; i++) {
        array = no_repeat_number(array,collection[i]);
    }

    return array;
}

module.exports = choose_no_repeat_number;
