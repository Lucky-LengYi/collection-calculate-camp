'use strict';
function map_to_even(collection){
    var _ = require('../lodash');

    function two_times(n) {
        return n * 2;
    }

    return _.map(collection,two_times);
}
module.exports = map_to_even;
