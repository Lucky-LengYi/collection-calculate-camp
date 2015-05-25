function collect_same_elements(collection_a, object_b) {
  var _ = require('../../lodash');

  return _.intersection(collection_a, object_b.value);

}

module.exports = collect_same_elements;
