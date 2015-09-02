var getAudioContext = require("./getAudioContext");

module.exports = function(wave, audioContext) {
  var real = new Float32Array(wave.real);
  var imag = new Float32Array(wave.imag);

  audioContext = audioContext || getAudioContext();

  return audioContext.createPeriodicWave(real, imag);
};
