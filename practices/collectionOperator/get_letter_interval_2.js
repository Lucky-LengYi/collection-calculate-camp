'use strict';

function create_new_list(number_a,number_b) {
    var array = [];
    var i;
    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            array.push(i);
        }
    }
    if (number_a >= number_b) {
        for (i = number_a; i >= number_b; i--) {
            array.push(i);
        }
    }

    return array;
}

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

    var array = create_new_list(number_a,number_b);
    array = change_num_to_letter(array);

    return array;

}

module.exports = get_letter_interval_2;
