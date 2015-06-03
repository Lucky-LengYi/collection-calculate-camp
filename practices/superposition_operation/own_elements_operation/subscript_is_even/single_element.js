'use strict';
var _ = require('../../../my_lodash/my_lodash.js');
var single_element = function(collection){
    var result = [];
    _.each(collection,function (num,i) {
        if (i % 2 === 0) {
            result[result.length] = num;
        }
    });
    return result;
};
module.exports = single_element;
