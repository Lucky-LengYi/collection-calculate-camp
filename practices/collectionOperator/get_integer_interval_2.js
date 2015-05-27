'use strict';

function get_even_number(array,number) {
    if(number%2 === 0){
        array[array.length] = number;
    }
    return array;
}

function get_integer_interval_2(number_a, number_b) {
    var array = [];
    var i,x,y;

    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            array = get_even_number(array,i);
        }
    }
    if (number_a >= number_b) {
        for (i = number_a; i >= number_b; i--) {
            array = get_even_number(array,i);
        }
    }

    return array;
}

module.exports = get_integer_interval_2;
