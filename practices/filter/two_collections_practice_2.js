'use strict';
var _ = require('../my_lodash/my_lodash.js');
function get_diff_letter(array,letter,collection) {
    var judge = true;
    for (var i = 0; i < collection.length; i++) {
        if (letter === collection[i]) {
            judge = false;
        }
    }
    if (judge) {
        array[array.length] = letter;
    }
    return array;
}

function choose_no_common_elements(collection_a, collection_b) {
    var result = [];

    _.each(collection_a,function (letter) {
        if (!_.exist(collection_b,letter)) {
            result[result.length] = letter;
        }
    });


    // for (var i = 0; i < collection_a.length; i++) {
    //     result = get_diff_letter(result,collection_a[i],collection_b);
    // }
    return result;
}

module.exports = choose_no_common_elements;
