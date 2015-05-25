'use strict';

function get_union(collection_a, collection_b) {
    var _ = require('../lodash');

    return _.union(collection_a, collection_b);
}

module.exports = get_union;
