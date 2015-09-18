var getAudioContext = require("./getAudioContext");

function fetchWithXHR(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new global.XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";

    xhr.onload = function() {
      resolve({
        arrayBuffer: function() {
          return xhr.response;
        },
      });
    };

    xhr.onerror = function() {
      // TODO: error object
      reject({});
    };

    xhr.send();
  });
}

module.exports = function(path, audioContext) {
  audioContext = audioContext || getAudioContext();

  return new Promise(function(resolve, reject) {
    fetchWithXHR(path).then(function(res) {
      return res.arrayBuffer();
    }).then(function(audioData) {
      audioContext.decodeAudioData(audioData, resolve, reject);
    });
  });
};
