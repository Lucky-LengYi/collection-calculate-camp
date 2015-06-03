'use strict';
var _ = require('../my_lodash/my_lodash.js');
function get_letter_interval(number_a, number_b) {
    var result = _.range(number_a,number_b);
    result = _.map(result,function (num) {
        var LETTER_NUM = 96;
        return String.fromCharCode(num+LETTER_NUM);
    });
    return result;
}


module.exports = get_letter_interval;
