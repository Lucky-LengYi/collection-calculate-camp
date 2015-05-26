'use strict';
var map_to_three_multiples = function(collections){
    var _ = require('../lodash');

    function three_times(n) {
        return n * 3;
    }

    return _.map(collections,three_times);
};

module.exports = map_to_three_multiples;
