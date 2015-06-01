'use strict';

var _ = require('../my_lodash/my_lodash.js');

// function get_diff_num(object,num) {
//     var exist = false;
//     for (var i = 0; i < object.length; i++) {
//         if (object[i] === num) {
//             exist = true;
//             break;
//         }
//     }
//     if (!exist) {
//         object[object.length] = num;
//     }
//     return object;
// }

function get_union(collection_a, collection_b) {
    var result = collection_a;
    _.each(collection_b,function (item,i) {
        if (!_.exist(result,item)) {
            result[result.length] = item;
        }
    });

    // for (var i = 0; i < collection_b.length; i++) {
    //     result = get_diff_num(collection_a,collection_b[i]);
    // }
    //
    return result;
}

module.exports = get_union;
