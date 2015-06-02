'use strict';
var _ = require('../../my_lodash/my_lodash.js');
function amount_even(collection) {
    var result_array = _.filter_in(collection,function (num) {
        if (num % 2 === 0) {
            return true;
        }else {
            return false;
        }
    });
    return _.sum(result_array);
}

module.exports = amount_even;
