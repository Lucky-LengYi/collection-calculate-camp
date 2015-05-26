'use strict';

function grouping_count(collection) {
    var _ = require('../lodash');
    
    return _.countBy(collection);
}

module.exports = grouping_count;
