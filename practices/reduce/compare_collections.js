'use strict';

function compare_collections(collection_a, collection_b) {
    var object_a = collection_a.toString();
    var object_b = collection_b.toString();

    if (object_a === object_b) {
        return true;
    }else {
        return false;
    }
}

module.exports = compare_collections;
