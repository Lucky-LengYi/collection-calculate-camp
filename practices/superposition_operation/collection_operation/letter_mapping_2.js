'use strict';

function average_to_letter(collection) {
    var sum = 0;
    for (var i = 0; i < collection.length; i++) {
        sum += collection[i];
    }
    var average = Math.ceil(sum/collection.length);
    var letter = String.fromCharCode(average+96);
    return letter;
}

module.exports = average_to_letter;
