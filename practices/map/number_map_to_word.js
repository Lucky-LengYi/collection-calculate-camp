'use strict';
var number_map_to_word = function(collection){
    var array = [];

    for (var i = 0; i < collection.length; i++) {
        array.push(String.fromCharCode(collection[i]+96));
    }

    return array;
};

module.exports = number_map_to_word;
