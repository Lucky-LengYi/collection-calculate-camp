function _() {}

_.bubble_sort = function (collection,func) {
    var item;
    var i,x;
    var result = _.filter_in(collection,function (item) {
        return true;
    });
    if (func !== undefined) {
        for (i = 0; i < result.length; i++) {
            for (x = i + 1; x < result.length; x++) {
                if (func(result[i],result[x])) {
                    item = result[i];
                    result[i] = result[x];
                    result[x] = item;
                }
            }
        }
    }else {
        for (i = 0; i < result.length; i++) {
            for (x = i + 1; x < result.length; x++) {
                if (result[x] < result[i]) {
                    item = result[i];
                    result[i] = result[x];
                    result[x] = item;
                }
            }
        }
    }
    return result;
};

_.each = function (collection,func) {
    for (var i = 0; i < collection.length; i++) {
        func(collection[i],i);
    }
};

_.exist = function (collection,num) {
    var result = false;
    _.each(collection,function (val) {
        if (val === num) {
            result = true;
        }
    });
    return result;
};

_.filter_in = function (collection,func) {
    var result = [];
    _.each(collection,function (num,i) {
        if (func(num,i)) {
            result[result.length] = num;
        }
    });
    return result;
};

_.filter_out = function (collection,func) {
    var result = [];
    each(collection,function (num,i) {
        if (!func(num,i)) {
            result[result.length] = num;
        }
    });
    return result;
};

_.first = function (collection, func) {
    var result = collection;
    if (func !== undefined) {
        result = _.filter_in(collection, func);
    }
    var first_item;
    _.reduce(result,function (num_a,num_b) {
        first_item = num_a;
        return num_a;
    });

    return first_item;
};

_.flatten = function (collection) {
    var result = [];
    _.each(collection,function (item,i) {
        if (item.length === undefined) {
            result[result.length] = item;
        }

        for (var x = 0;item.length !== undefined && x < item.length; x++) {
            if (item[x].length === undefined) {
                result[result.length] = item[x];
            }
        }
    });
    return result;
};

_.get_median = function (collection) {
    var len = collection.length;
    return len % 2 === 0 ? (collection[len / 2] + collection[len / 2 -1]) / 2 : collection[(len - 1) / 2] ;
};

_.last = function (collection,func) {
    var result = collection;
    if (func !== undefined) {
        result = _.filter_in(collection, func);
    }
    var last_item;
    _.reduce(result,function (num_a,num_b) {
        last_item = num_b;
    });

    return last_item;
};

_.map = function (collection,func) {
    var result = [];
    _.each(collection,function (num) {
        result[result.length] = func(num);
    });
    return result;
};

_.max = function (collection) {
    var result;
    _.reduce(collection,function (num_a,num_b) {
        result = num_a > num_b ? num_a : num_b;
        return result;
    });

    return result;
};

_.min = function (collection) {
    var result;
    _.reduce(collection,function (num_a,num_b) {
        result = num_a < num_b ? num_a : num_b;
        return result;
    });

    return result;
};

_.num_to_letter = function (num) {
    var letters = 'zabcdefghijklmnopqrstuvwxyz';
    var NUMBER_OF_LETTERS = 26;
    if (num / NUMBER_OF_LETTERS > 1) {
        var first_letter = letters.charAt((Math.ceil(num / NUMBER_OF_LETTERS))-1);
        var second_letter = letters.charAt(num % NUMBER_OF_LETTERS);
        return first_letter + second_letter;
    }else {
        return letters.charAt(num);
    }
};

_.range = function (num_a,num_b) {
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
};

_.reduce = function (collection,func) {
    var temp;
    _.each(collection,function (item,i) {
        if (i === 0) {
            temp = item;
        }else{
            temp = func(temp,item);
        }
    });
};

_.sum = function (collection) {
    var result;
    _.reduce(collection,function (num_a,num_b) {
        result = num_a + num_b;
        return result;
    });
    return result;
};

module.exports = _;
