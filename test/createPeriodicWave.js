var assert = require("power-assert");
var createPeriodicWave = require("../createPeriodicWave");

describe("createPeriodicWave(wave: object, [ audioContext: AudioContext ]): PeriodicWave", function() {
  it("works", function() {
    var audioContext = new global.AudioContext();
    var wave = {
      real: new Float32Array([ 0.1, 0.2, 0.1, 0.2, 0.1, 0.2, 0.1, 0.2 ]),
      imag: new Float32Array([ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]),
    };
    var periodicWave = createPeriodicWave(wave, audioContext);

    assert(periodicWave instanceof global.PeriodicWave);
    assert(periodicWave.$real = wave.real);
    assert(periodicWave.$imag = wave.imag);
  });
});
