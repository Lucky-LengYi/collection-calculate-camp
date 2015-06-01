'use strict';

var _ = require('../my_lodash/my_lodash.js');

function collect_all_even(collection) {
    var result = [];
    return _.filter_in(collection,function (num) {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    });
}

module.exports = collect_all_even;
