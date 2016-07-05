var _ = require("lodash");

var worker = function(articles) {

  return _.chain(articles).groupBy('article').map(function(group, article){
    return {article: parseInt(article), total_orders: _.reduce(group, function(total, pair){
      return total + pair.quantity;
    }, 0)}
  }).sortBy('article').reverse();
};

module.exports = worker;
