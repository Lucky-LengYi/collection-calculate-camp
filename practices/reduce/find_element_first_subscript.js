'use strict';

function calculate_elements_sum(collection, element) {
    var subscript;
    for (var i = 0; i < collection.length; i++) {
        if (element === collection[i]) {
            subscript = i;
            break;
        }
    }
    return subscript;
}

module.exports = calculate_elements_sum;
