'use strict';
var rank_asc = function(collection){
  var num;
  for (var i = 0; i < collection.length; i++) {
      for (var x = i + 1; x < collection.length; x++) {
          if (collection[x] > collection[i]) {
              num = collection[i];
              collection[i] = collection[x];
              collection[x] = num;
          }
      }
  }
  return collection;
};

module.exports = rank_asc;
