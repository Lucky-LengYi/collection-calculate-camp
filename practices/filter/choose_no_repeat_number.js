'use strict';

function choose_no_repeat_number(collection) {
    var _ = require('../lodash');
    return _.uniq(collection);
}

module.exports = choose_no_repeat_number;
