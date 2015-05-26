'use strict';

function grouping_count(collection) {

    var _ = require('../lodash');
    var uniq = _.uniq(collection);
    var result = {};

    for (var i = 0; i < uniq.length; i++) {
        result.uniq[i] = 0;
    }



    // for (var i = 0; i < collection.length; i++) {
    //     for (var x = 0; x < uniq.length; x++) {
    //         if (collection[i] === uniq[x]) {
    //             result.push({uniq[x]});
    //         }
    //     }
    // }
}

module.exports = grouping_count;
