var _ = require("lodash");

var worker = function(user) {
  return _.template('Hello <%= name %> (logins: <%= logins %>)')({name: user.name, logins: user.login.length});
};

module.exports = worker;
