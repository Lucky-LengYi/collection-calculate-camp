'use strict';
var _ = require('../../my_lodash/my_lodash.js');

var even_asc_odd_desc = function(collection){
    var odd = _.filter_in(collection,function (num) {
        if (num % 2 === 1) {
            return true;
        }else {
            return false;
        }
    });
    var even = _.filter_in(collection,function (num) {
        if (num % 2 === 0) {
            return true;
        }else {
            return false;
        }
    });
    odd = _.bubble_sort(odd);
    even = _.bubble_sort(even);
    var result = even;
    var len = odd.length;
    for (; len--; ) {
        result[result.length] = odd[len];
    }
    return result;
};
module.exports = even_asc_odd_desc;
