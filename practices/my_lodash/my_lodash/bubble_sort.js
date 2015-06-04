var filter_in = require('./filter_in');
function bubble_sort(collection,func) {
    var item;
    var i,x;
    var result = filter_in(collection,function (item) {
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
}
//
// var a = [1,2,3,4,5,6,7,8,9];
// var c = [];
// var b = bubble_sort(a,function (num_a,num_b) {
//     if (num_a < num_b){
//         return true;
//     }else {
//         return false;
//     }
// });
// console.log(b);
module.exports = bubble_sort;
