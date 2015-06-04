'use strict';
var _ = require('../my_lodash/my_lodash.js');

function collect_all_even(collection) {
    var result = [];
    return _.filter_in(collection,function (num) {
        return num % 2 === 0;
    });
}

module.exports = collect_all_even;
