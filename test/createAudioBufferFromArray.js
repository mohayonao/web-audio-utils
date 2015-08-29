var assert = require("power-assert");
var createAudioBufferFromArray = require("../createAudioBufferFromArray");

describe("createAudioBufferFromArray(array: Float32Array[], [ audioContext: AudioContext ]): AudioBuffer", function() {
  it("works", function() {
    var audioContext = new global.AudioContext();
    var array = [
      new Float32Array([ +0.0, +0.1, +0.2, +0.3, +0.4, +0.5, +0.6, +0.7 ]),
      new Float32Array([ -0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7 ]),
    ];
    var buffer = createAudioBufferFromArray(array, audioContext);

    assert(buffer instanceof global.AudioBuffer);
    assert.deepEqual(buffer.getChannelData(0), array[0]);
    assert.deepEqual(buffer.getChannelData(1), array[1]);
  });
});
