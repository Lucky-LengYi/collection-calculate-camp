'use strict';

function double_to_one(collection) {
    var _ = require('../lodash');

    var one_dimensional_array = _.flattenDeep(collection);

    return _.uniq(one_dimensional_array);
}

module.exports = double_to_one;
