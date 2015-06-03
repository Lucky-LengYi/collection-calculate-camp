function range(num_a,num_b) {
    var step = Math.abs(num_b - num_a)/(num_b - num_a);
    var count = (num_b - num_a) / step;
    result = [];
    for (var i = 0; i <= count; i ++) {
        result[result.length] = (num_a + i * step);
    }
    if (num_a === num_b) {
        result = [num_a];
    }
    return result;
}

module.exports = range;
