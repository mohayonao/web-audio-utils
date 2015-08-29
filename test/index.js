var assert = require("power-assert");
var fs = require("fs");
var path = require("path");
var index = require("../");

describe("index", function() {
  it("exports", function(done) {
    var rootPath = path.join(__dirname, "../");

    fs.readdir(rootPath, function(err, files) {
      files.filter(function(file) {
        return /\.js$/.test(file) && file !== "index.js";
      }).forEach(function(file) {
        var func = require(path.join(__dirname, "../" + file));
        var name = file.replace(/\.js$/, "");

        assert(index[name] === func);
      });

      done();
    });
  });
});
