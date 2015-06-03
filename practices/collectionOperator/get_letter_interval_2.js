'use strict';
var _ = require('../my_lodash/my_lodash.js');
function change_num_to_letter(array) {
    var NUMBER_OF_LETTERS = 26;
    for (var i = 0; i < array.length; i++) {
        var letter = '';

        if (array[i]/NUMBER_OF_LETTERS > 1) {
            var first_letter = String.fromCharCode(Math.ceil(array[i]/NUMBER_OF_LETTERS)+95);
            var num = array[i] % NUMBER_OF_LETTERS;
            num = num === 0? NUMBER_OF_LETTERS:num;
            var second_letter = String.fromCharCode(num + 96);
            letter = first_letter + second_letter;
            array[i] = letter;
        }else {
            letter = String.fromCharCode(array[i]+96);
            array[i] = letter;
        }
    }
    return array;
}

function get_letter_interval_2(number_a, number_b) {
    var result = _.range(number_a,number_b);
    result = change_num_to_letter(result);
    return result;

}

module.exports = get_letter_interval_2;
