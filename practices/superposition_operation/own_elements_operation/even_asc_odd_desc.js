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
var even_asc_odd_desc = function(collection){
    var odd = [];
    var even = [];

    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 1) {
            odd[odd.length] = collection[i];
        }else {
            even[even.length] = collection[i];
        }
    }

    odd = bubble_sort(odd);
    var odd_reverse = [];
    var odd_length = odd.length;
    for (; odd_length--;) {
        odd_reverse[odd_reverse.length] = odd[odd_length];
    }
    even = bubble_sort(even);

    for (i = 0; i < odd_reverse.length; i++) {
        even[even.length] = odd_reverse[i];
    }
    return even;
};
module.exports = even_asc_odd_desc;
