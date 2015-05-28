'use strict';
function three_times(n) {
    return n * 3;
}

var map_to_three_multiples = function(collections){

    for (var i = 0; i < collections.length; i++) {
      collections[i] = three_times(collections[i]);
    }

    return collections;
};

module.exports = map_to_three_multiples;
