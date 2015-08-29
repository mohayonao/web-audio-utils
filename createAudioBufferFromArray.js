var getAudioContext = require("./getAudioContext");

module.exports = function(array, audioContext) {
  var buffer;

  audioContext = audioContext || getAudioContext();
  buffer = audioContext.createBuffer(array.length, array[0].length, audioContext.sampleRate);

  array.forEach(function(data, i) {
    buffer.getChannelData(i).set(data);
  });

  return buffer;
};
