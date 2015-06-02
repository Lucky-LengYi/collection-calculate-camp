'use strict';
var _ = require('../my_lodash/my_lodash.js');

var number_map_to_word_over_26 = function(collection){

    var result = _.map(collection,function (number) {
        var letter = '';
        var i;
        var NUMBER_OF_LETTERS = 26;
        if (number/26 > 1) {
            var first_letter = String.fromCharCode(Math.ceil(number/NUMBER_OF_LETTERS)+95);
            var num = number % NUMBER_OF_LETTERS;
            num = num === 0? NUMBER_OF_LETTERS:num;
            var second_letter = String.fromCharCode(num + 96);
            letter = first_letter + second_letter;
        }else {
            letter = String.fromCharCode(number + 96);
        }
        return letter;
    });

    return result;
};

module.exports = number_map_to_word_over_26;
