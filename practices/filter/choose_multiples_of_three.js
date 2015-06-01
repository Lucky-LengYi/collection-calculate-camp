'use strict';

var _ = require('../my_lodash/my_lodash.js');
// function get_three_times(array,num) {
//     if (num%3 === 0) {
//         array[array.length] = num;
//     }
//     return array;
// }

function choose_multiples_of_three(collection) {
    // var array = [];

    return _.filter_in(collection,function (num) {
        if (num % 3 === 0) {
            return true;
        }
        return false;
    });

    // for (var i = 0; i < collection.length; i++) {
    //     array = get_three_times(array,collection[i]);
    // }
    // return array;
}

module.exports = choose_multiples_of_three;
