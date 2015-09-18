var appendIfNotExists = require("@mohayonao/utils/appendIfNotExists");
var removeIfExists = require("@mohayonao/utils/removeIfExists");

var memo = [];

module.exports = {
  append: function(node) {
    appendIfNotExists(memo, node);
  },
  remove: function(node) {
    removeIfExists(memo, node);
  },
};
