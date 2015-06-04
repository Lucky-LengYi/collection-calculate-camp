function bubble_sort(collection,func) {
    var num;
    var i,x;
    var result = [];
    if (func !== undefined) {
        for (i = 0; i < collection.length; i++) {
            for (x = i + 1; x < collection.length; x++) {
                if (func(collection[i],collection[x])) {
                    num = collection[i];
                    collection[i] = collection[x];
                    collection[x] = num;
                }
            }
        }
    }else {
        for (i = 0; i < collection.length; i++) {
            for (x = i + 1; x < collection.length; x++) {
                if (collection[x] < collection[i]) {
                    num = collection[i];
                    collection[i] = collection[x];
                    collection[x] = num;
                }
            }
        }
    }
    return collection;
}

var a = [1,2,3,4,5,6,7,8,9];
var c = [];
var b = bubble_sort(a,function (num_a,num_b) {
    if (num_a < num_b){
        return true;
    }else {
        return false;
    }
});
console.log(b);
module.exports = bubble_sort;
