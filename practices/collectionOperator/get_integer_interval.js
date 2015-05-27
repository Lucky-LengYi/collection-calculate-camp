'use strict';

function get_integer_interval(number_a, number_b) {
    var array = [];
    var i;

    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            array[array.length] = i;
        }
    }
    if (number_a >= number_b) {
        for (i = number_a; i >= number_b; i--) {
            array[array.length] = i;
        }
    }
    return array;
  }

module.exports = get_integer_interval;
