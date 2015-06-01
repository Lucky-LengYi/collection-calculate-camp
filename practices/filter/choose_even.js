'use strict';
var _ = require('../my_lodash/my_lodash.js');
// 
// function get_even(array,num) {
//     if (num%2 === 0) {
//         array[array.length] = num;
//     }
//     return array;
// }

function choose_even(collection) {
    // var array = [];

    return _.filter_in(collection,function (num) {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    });


    // for (var i = 0; i < collection.length; i++) {
    //     array = get_even(array,collection[i]);
    // }
    // return array;
}

module.exports = choose_even;
