var activateWebAudioAPI = require("./activateWebAudioAPI");

module.exports = function(audioContext, callback) {
  if (!("ontouchstart" in global)) {
    if (typeof callback === "function") {
      setTimeout(callback, 0);
    }
    return audioContext;
  }

  function choreFunction() {
    activateWebAudioAPI(audioContext, function() {
      global.removeEventListener("touchstart", choreFunction);
      global.removeEventListener("touchend", choreFunction);
      if (typeof callback === "function") {
        callback();
      }
    });
  }

  global.addEventListener("touchstart", choreFunction);
  global.addEventListener("touchend", choreFunction);

  return audioContext;
};
