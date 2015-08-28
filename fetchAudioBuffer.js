module.exports = function(audioContext, path) {
  return new Promise(function(resolve, reject) {
    global.fetch(path).then(function(res) {
      return res.arrayBuffer();
    }).then(function(audioData) {
      audioContext.decodeAudioData(audioData, resolve, reject);
    });
  });
};
