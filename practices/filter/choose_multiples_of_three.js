'use strict';

function choose_multiples_of_three(collection) {
  var _ = require('../lodash');

  return _.remove(collection, function(n) {return n % 3 === 0;});
}

module.exports = choose_multiples_of_three;
