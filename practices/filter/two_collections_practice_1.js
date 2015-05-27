'use strict';

function get_same_letter(array,letter_a,letter_b) {
    if (letter_a === letter_b) {
        array[array.length] = letter_a;
    }
    return array;
}

function choose_common_elements(collection_a, collection_b) {
    var result = [];
    for (var i = 0; i < collection_a.length; i++) {
        for (var x = 0; x < collection_b.length; x++) {
            result = get_same_letter(result,collection_a[i],collection_b[x]);
        }
    }
    return result;
}

module.exports = choose_common_elements;
