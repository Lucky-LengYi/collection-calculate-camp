'use strict';
var rank_desc = function(collection){
    var _ = require('../lodash');
    return _.sortBy(collection);
};

module.exports = rank_desc;
