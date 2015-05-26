'use strict';
var map_to_four_multiples_add_one = function(collection){
    var _ = require('../lodash');

    function four_times_add_one(n) {
        return n * 4 + 1;
    }

    return _.map(collection,four_times_add_one);
};

module.exports = map_to_four_multiples_add_one;
