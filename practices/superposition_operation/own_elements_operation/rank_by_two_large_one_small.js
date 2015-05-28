'use strict';
function bubble_sort(object) {
    var num;
    for (var i = 0; i < object.length; i++) {
        for (var x = i + 1; x < object.length; x++) {
            if (object[x] < object[i]) {
                num = object[i];
                object[i] = object[x];
                object[x] = num;
            }
        }
    }
    return object;
}
function rank_by_two_large_one_small(collection){
    var result = [];
    result = bubble_sort(collection);
    for (var i = 0; i < result.length; i++) {
        if (i % 3 === 2) {
            var num = result[i - 2];
            result[i - 2] = result[i - 1];
            result[i - 1] = result[i];
            result[i] = num;
        }
    }
    return result;
}
module.exports = rank_by_two_large_one_small;
