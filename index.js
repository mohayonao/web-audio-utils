var createAudioBufferFromArray = require("./createAudioBufferFromArray");
var createPeriodicWave = require("./createPeriodicWave");
var enableCustomAudioNode = require("./enableCustomAudioNode");
var enableMobileAutoPlay = require("./enableMobileAutoPlay");
var fetchAudioBuffer = require("./fetchAudioBuffer");
var getAudioContext = require("./getAudioContext");
var splitAudioBuffer = require("./splitAudioBuffer");

module.exports = {
  createAudioBufferFromArray: createAudioBufferFromArray,
  createPeriodicWave: createPeriodicWave,
  enableCustomAudioNode: enableCustomAudioNode,
  enableMobileAutoPlay: enableMobileAutoPlay,
  fetchAudioBuffer: fetchAudioBuffer,
  getAudioContext: getAudioContext,
  splitAudioBuffer: splitAudioBuffer,
};
