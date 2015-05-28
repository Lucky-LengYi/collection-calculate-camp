'use strict';

function calculate_elements_sum(collection, element) {
    var subscript;
    for (var i = 0; i < collection.length; i++) {
        subscript = collection[i] === element ? i : subscript;
    }
    return subscript;
}

module.exports = calculate_elements_sum;
