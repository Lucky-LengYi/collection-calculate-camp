'use strict';

function collect_all_even(collection) {
    var _ = require('../lodash');

    return _.remove(collection, function(n) {return n % 2 === 0;});
}

module.exports = collect_all_even;
