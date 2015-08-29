var getAudioContext = require("./getAudioContext");

/* eslint-disable no-unused-vars */

module.exports = function(audioContext) {
  var memo = null;

  if (!("ontouchstart" in global)) {
    return;
  }

  audioContext = audioContext || getAudioContext();

  function choreFunction() {
    var bufSrc = audioContext.createBufferSource();

    bufSrc.start(audioContext.currentTime);
    bufSrc.stop(audioContext.currentTime + 0.001);
    bufSrc.connect(audioContext.destination);
    bufSrc.onended = function() {
      bufSrc.disconnect();
      memo = null;
    };
    memo = bufSrc;

    global.removeEventListener("touchstart", choreFunction);
  }

  global.addEventListener("touchstart", choreFunction);
};
