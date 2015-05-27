'use strict';

function get_diff_num(num_a,num_b) {
    
}

function get_union(collection_a, collection_b) {
    var result = [];
    for (var i = 0; i < collection_a.length; i++) {
        for (var x = 0; x < collection_b.length; x++) {
            result = get_diff_num(collection_a,collection_b);
        }
    }

    return result;
}

module.exports = get_union;
