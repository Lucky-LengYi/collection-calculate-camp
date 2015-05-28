'use strict';
function four_times_add_one(num) {
    return num * 4 + 1;
}

var map_to_four_multiples_add_one = function(collection){
    for (var i = 0; i < collection.length; i++) {
      collection[i] = four_times_add_one(collection[i]);
    }
    return collection;
};

module.exports = map_to_four_multiples_add_one;
