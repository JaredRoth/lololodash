var _ = require("lodash");

var worker = function(cities) {
  var towns = {
    hot: [],
    warm: []
  };

  function checkTemp(temp) {
    return temp > 19;
  }

  _.forEach(cities, function(city, name){
    if (_.every(city, checkTemp)) {
      towns.hot.push(name);
    } else if (_.some(city, checkTemp)) {
      towns.warm.push(name);
    }
  });

  return towns;
};

module.exports = worker;
