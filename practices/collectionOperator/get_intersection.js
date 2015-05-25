'use strict';

function get_intersection(collection_a, collection_b) {
    var _ = require('../lodash');

    return _.intersection(collection_b, collection_a);
}

module.exports = get_intersection;
