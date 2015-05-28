'use strict';

function even_to_letter(collection) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i]%2===0) {
            result[result.length] = collection[i];
        }
    }

    for (i = 0; i < result.length; i++) {
        result[i] = String.fromCharCode(result[i]+96);
    }

    return result;
}

module.exports = even_to_letter;
