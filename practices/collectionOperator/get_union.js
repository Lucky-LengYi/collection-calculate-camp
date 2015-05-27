'use strict';

function get_diff_num(object_a,object_b) {
    var sum = object_a;
    for (var i = 0; i < object_b.length; i++) {
        for (var x = 0; i < object_a.length; i++) {
        }
    }
}

function get_union(collection_a, collection_b) {
    var result = [];
    for (var i = 0; i < collection_a.length; i++) {
        for (var x = 0; x < collection_b.length; x++) {
            result = get_diff_num(collection_a[i],collection_b[x]);
        }
    }

    return result;
}

module.exports = get_union;
