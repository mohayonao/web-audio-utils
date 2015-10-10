var activateCustomAudioNode = require("./activateCustomAudioNode");
var activateMobileAutoPlay = require("./activateMobileAutoPlay");
var activateWebAudioAPI = require("./activateWebAudioAPI");
var createAudioBufferFromArray = require("./createAudioBufferFromArray");
var createPeriodicWave = require("./createPeriodicWave");
var enableCustomAudioNode = require("./enableCustomAudioNode");
var enableMobileAutoPlay = require("./enableMobileAutoPlay");
var fetchAudioBuffer = require("./fetchAudioBuffer");
var GCGuard = require("./GCGuard");
var getAudioContext = require("./getAudioContext");
var splitAudioBuffer = require("./splitAudioBuffer");

module.exports = {
  activateCustomAudioNode: activateCustomAudioNode,
  activateMobileAutoPlay: activateMobileAutoPlay,
  activateWebAudioAPI: activateWebAudioAPI,
  createAudioBufferFromArray: createAudioBufferFromArray,
  createPeriodicWave: createPeriodicWave,
  enableCustomAudioNode: enableCustomAudioNode,
  enableMobileAutoPlay: enableMobileAutoPlay,
  fetchAudioBuffer: fetchAudioBuffer,
  GCGuard: GCGuard,
  getAudioContext: getAudioContext,
  splitAudioBuffer: splitAudioBuffer,
};
