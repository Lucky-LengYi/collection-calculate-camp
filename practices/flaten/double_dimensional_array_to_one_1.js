'use strict';

function double_to_one(collection) {
    var array=[];

    for (var i = 0; i < collection.length; i++) {

        if (collection[i].length===undefined) {
            array[array.length] = (collection[i]);
        }

        for (var x = 0;collection[i].length !== undefined && x < (collection[i]).length; x++) {
            if (collection[i][x].length===undefined) {
                array[array.length] = (collection[i][x]);
            }
        }
    }
    return array;
}

module.exports = double_to_one;
