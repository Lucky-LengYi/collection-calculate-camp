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
var calculate_median = function(collection){
    var median;
    collection = bubble_sort(collection);
    if (collection.length%2 === 0) {
        median = (collection[collection.length/2] + collection[collection.length/2-1])/2;
    }else {
        median = collection[collection.length/2-0.5];
    }
    return median;
};
module.exports = calculate_median;
