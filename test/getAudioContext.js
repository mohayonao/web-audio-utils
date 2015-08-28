var assert = require("power-assert");
var getAudioContext = require("../getAudioContext");

describe("getAudioContext(): AudioContext", function() {
  it("works", function() {
    var context1 = getAudioContext();
    var context2 = getAudioContext();

    assert(context1 instanceof global.AudioContext);
    assert(context1 === context2);
  });
});
