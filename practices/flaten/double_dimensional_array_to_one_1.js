'use strict';

function double_to_one(collection) {
    var _ = require('../lodash');
    return _.flattenDeep(collection);
}

module.exports = double_to_one;
