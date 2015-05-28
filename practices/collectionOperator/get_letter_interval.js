'use strict';

function get_letter_interval(number_a, number_b) {
    var array = [];
    var i;
    //TODO：计算stap 一个for循环。
    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            array[array.length] = String.fromCharCode(i+96);
        }
    }
    if (number_a >= number_b) {
        for (i = number_a; i >= number_b; i--) {
            array[array.length] = String.fromCharCode(i+96);
        }
    }

    return array;
}


module.exports = get_letter_interval;
