'use strict';
var _ = require('../my_lodash/my_lodash.js');
function find_first_even(collection) {
    return _.first(collection,function (num) {
        if (num % 2 === 0) {
            return true;
        }else {
            return false;
        }
    });
}

module.exports = find_first_even;
