var _ = require("lodash");

var worker = function(words) {
  return _.sortBy(words, 'quantity').reverse();
};

module.exports = worker;
