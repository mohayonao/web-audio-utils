var assert = require("power-assert");
var splitAudioBuffer = require("../splitAudioBuffer");

describe("splitAudioBuffer(audioBuffer: AudioBuffer, n: number): AudioBuffer[]", function() {
  it("works", function() {
    var audioContext = new global.AudioContext();
    var audioBuffer = audioContext.createBuffer(2, 8, audioContext.sampleRate);
    var result;

    audioBuffer.getChannelData(0).set(new Float32Array([ +0.0, +0.1, +0.2, +0.3, +0.4, +0.5, +0.6, +0.7 ]));
    audioBuffer.getChannelData(1).set(new Float32Array([ -0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7 ]));

    result = splitAudioBuffer(audioBuffer, 3, audioContext);

    assert(Array.isArray(result));
    assert(result.length === 3);

    assert(result[0] instanceof global.AudioBuffer);
    assert(result[0].length === 2);
    assert.deepEqual(result[0].getChannelData(0), new Float32Array([ +0.0, +0.1 ]));
    assert.deepEqual(result[0].getChannelData(1), new Float32Array([ -0.0, -0.1 ]));
    assert(result[1].length === 3);
    assert.deepEqual(result[1].getChannelData(0), new Float32Array([ +0.2, +0.3, +0.4 ]));
    assert.deepEqual(result[1].getChannelData(1), new Float32Array([ -0.2, -0.3, -0.4 ]));
    assert(result[2].length === 3);
    assert.deepEqual(result[1].getChannelData(0), new Float32Array([ +0.2, +0.3, +0.4 ]));
    assert.deepEqual(result[1].getChannelData(1), new Float32Array([ -0.2, -0.3, -0.4 ]));

    assert.deepEqual(splitAudioBuffer(audioBuffer), []);
  });
});
