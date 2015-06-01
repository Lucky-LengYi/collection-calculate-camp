'use strict';
var single_element = function(collection){
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 === 0) {
            result[result.length] = collection[i];
        }
    }
    return result;
};
module.exports = single_element;
