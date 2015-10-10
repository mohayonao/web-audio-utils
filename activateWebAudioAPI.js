var getAudioContext = require("./getAudioContext");
var chored = false;

/* eslint-disable no-unused-vars */

module.exports = function(audioContext, callback) {
  var bufSrc, buffer, memo;

  if (!chored) {
    chored = true;
    audioContext = audioContext || getAudioContext();
    bufSrc = audioContext.createBufferSource();
    buffer = audioContext.createBuffer(1, 128, audioContext.sampleRate);

    bufSrc.buffer = buffer;
    bufSrc.start(audioContext.currentTime);
    bufSrc.stop(audioContext.currentTime + buffer.duration);
    bufSrc.connect(audioContext.destination);
    bufSrc.onended = function() {
      bufSrc.disconnect();
      memo = null;
      if (typeof callback === "function") {
        callback();
      }
    };
    memo = bufSrc;
  }

  return audioContext;
};
