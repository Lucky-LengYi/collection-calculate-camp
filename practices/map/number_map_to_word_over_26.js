'use strict';
var number_map_to_word_over_26 = function(collection){
    var i;
    var NUMBER_OF_LETTERS = 26;

    for (i = 0; i < collection.length; i++) {
        var letter = '';

        if (collection[i]/26 > 1) {
            var first_letter = String.fromCharCode(Math.ceil(collection[i]/NUMBER_OF_LETTERS)+95);
            var num = collection[i] % NUMBER_OF_LETTERS;
            num = num === 0? NUMBER_OF_LETTERS:num;
            var second_letter = String.fromCharCode(num + 96);
            letter = first_letter + second_letter;
            collection[i] = letter;
        }else {
            letter = String.fromCharCode(collection[i]+96);
            collection[i] = letter;
        }

    }
    return collection;
};

module.exports = number_map_to_word_over_26;
