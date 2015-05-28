'use strict';
function no_repeat_number(array,num) {

    var exist = false;
    for (var i = 0; i < array.length; i++) {
        if (num === array[i]) {
            exist = true;
        }
    }
    if (!exist) {
        array[array.length] = num;
    }

    return array;
}

function double_to_one(collection) {
    var array=[];
    for (var i = 0; i < collection.length; i++) {

        if (collection[i].length===undefined) {
            array[array.length] = (collection[i]);
        }

        for (var x = 0;collection[i].length!==undefined && x < (collection[i]).length; x++) {
            if (collection[i][x].length===undefined) {
                array[array.length] = (collection[i][x]);
            }
        }
    }
    var result = [];
    for (i = 0; i < array.length; i++) {
        result = no_repeat_number(result,array[i]);
    }

    return result;
}
module.exports = double_to_one;
