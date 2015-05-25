'use strict';

function get_integer_interval_2(number_a, number_b) {
    var array = [];
    var i,x,y;
    var _ = require('../lodash');

    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            array.push(i);
        }
        return _.remove(array, function(n) {return n % 2 === 0;});
    }
    if (number_a >= number_b) {
        for (i = number_a; i >= number_b; i--) {
            array.push(i);
        }
        return _.remove(array, function(n) {return n % 2 === 0;});
    }

    return array;
}

module.exports = get_integer_interval_2;
