'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function hybrid_operation_to_uneven(collection) {
    var get_odd = _.filter_in(collection,function (num) {
        if (num % 2 === 1) {
            return true;
        }else {
            return false;
        }
    });
    var result = _.map(get_odd,function (num) {
        return num * 3 + 2;
    });
    return result;
}

module.exports = hybrid_operation_to_uneven;
