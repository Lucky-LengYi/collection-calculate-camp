function get_median(collection) {
    var len = collection.length;
    return len % 2 === 0 ? (collection[len / 2] + collection[len / 2 -1]) / 2 : collection[(len - 1) / 2] ;
}
module.exports = get_median;
