var _ = require("lodash");

var worker = function(collection) {
  average =  _.reduce(collection, function(sum, pair){return sum + pair.income}, 0) / _.size(collection);

  underperform = _.chain(collection).filter(function(pair){return pair.income <= average}).sortBy('income');
  overperform = _.chain(collection).filter(function(pair){return pair.income > average}).sortBy('income');

  return {average: average, underperform: underperform, overperform: overperform}
};

module.exports = worker;
