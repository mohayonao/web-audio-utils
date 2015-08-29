var getAudioContext = require("./getAudioContext");

module.exports = function(audioBuffer, n, audioContext) {
  var numberOfChannels, channelData;
  var result, length, start, end, startIndex, endIndex;
  var subLength, subBuffer;
  var i, j;

  n |= 0;

  if (n <= 0) {
    return [];
  }

  audioContext = audioContext || getAudioContext();
  numberOfChannels = audioBuffer.numberOfChannels;
  channelData = new Array(numberOfChannels);

  for (i = 0; i < numberOfChannels; i++) {
    channelData[i] = audioBuffer.getChannelData(i);
  }

  result = new Array(n);
  length = audioBuffer.length / n;
  start = 0;
  end = 0;

  for (i = 0; i < n; i++) {
    end = start + length;

    startIndex = start|0;
    endIndex = end|0;
    subLength = endIndex - startIndex;
    subBuffer = audioContext.createBuffer(audioBuffer.numberOfChannels, subLength, audioBuffer.sampleRate);

    for (j = 0; j < numberOfChannels; j++) {
      subBuffer.getChannelData(j).set(channelData[j].subarray(startIndex, endIndex));
    }

    result[i] = subBuffer;
    start = end;
  }

  return result;
};
