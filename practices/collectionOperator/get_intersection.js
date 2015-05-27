'use strict';
function get_same_number(array,num_a,num_b) {
    if (num_a === num_b) {
        array[array.length] = num_a;
    }
    return array;
}

function get_intersection(collection_a, collection_b) {

    var result = [];

    for (var i = 0; i < collection_b.length; i++) {
        for (var x = 0; x < collection_a.length; x++) {
            result = get_same_number(result,collection_b[i],collection_a[x]);
        }
    }

    return result;
}

module.exports = get_intersection;
