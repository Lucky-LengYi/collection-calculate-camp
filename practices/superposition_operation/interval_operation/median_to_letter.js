'use strict';
function bubble_sort(object) {
    var num;
    for (var i = 0; i < object.length; i++) {
        for (var x = i + 1; x < object.length; x++) {
            if (object[x] < object[i]) {
                num = object[i];
                object[i] = object[x];
                object[x] = num;
            }
        }
    }
    return object;
}
function median_to_letter(collection) {
    var median;
    var NUMBER_OF_LETTERS = 26;
    collection = bubble_sort(collection);
    if (collection.length%2 === 0) {
        median = (collection[collection.length/2] + collection[collection.length/2-1])/2;
    }else {
        median = collection[collection.length/2-0.5];
    }
    median = Math.ceil(median);

    var letter = '';
    if (median/NUMBER_OF_LETTERS > 1) {
        var first_letter = String.fromCharCode(Math.ceil(median/NUMBER_OF_LETTERS)+95);
        var num = median % NUMBER_OF_LETTERS;
        num = num === 0? NUMBER_OF_LETTERS:num;
        var second_letter = String.fromCharCode(num + 96);
        letter = first_letter + second_letter;
    }else {
        letter = String.fromCharCode(median+96);
    }
    return letter;
}

module.exports = median_to_letter;
