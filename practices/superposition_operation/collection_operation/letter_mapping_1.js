'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function even_to_letter(collection) {
    var result = _.filter_in(collection,function (num) {
        if (num % 2 === 0) {
            return true;
        }else {
            return false;
        }
    });
    _.each(result,function (num,i) {
        var LETTER_NUM = 96;
        result[i] = String.fromCharCode(result[i]+LETTER_NUM);
    });

    return result;
}

module.exports = even_to_letter;
