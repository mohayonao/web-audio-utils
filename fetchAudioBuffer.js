var getAudioContext = require("./getAudioContext");

module.exports = function(path, audioContext) {
  audioContext = audioContext || getAudioContext();

  return new Promise(function(resolve, reject) {
    global.fetch(path).then(function(res) {
      return res.arrayBuffer();
    }).then(function(audioData) {
      audioContext.decodeAudioData(audioData, resolve, reject);
    });
  });
};
