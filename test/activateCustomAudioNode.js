var assert = require("power-assert");
var activateCustomAudioNode = require("../activateCustomAudioNode");

function CustomAudioNode(audioContext) {
  this.audioContext = audioContext;
  this.gain1 = audioContext.createGain();
  this.gain2 = audioContext.createGain();
  this.inlet = this.gain1;
  this.outlet = this.gain2;
}

CustomAudioNode.prototype.connect = function() {
  this.gain1.connect(this.gain2);
  this.gain2.connect.apply(this.gain2, arguments);
};

CustomAudioNode.prototype.disconnect = function() {
  this.gain1.disconnect();
  this.gain2.disconnect.apply(this.gain2, arguments);
};

CustomAudioNode.prototype.__connectFrom = function(source) {
  source.connect(this.gain1);
};

CustomAudioNode.prototype.__disconnectFrom = function(source) {
  source.disconnect();
};

describe("activateCustomAudioNode(): void", function() {
  before(function() {
    this.AudioNode$connect = global.AudioNode.prototype.connect;
    this.AudioNode$disconnect = global.AudioNode.prototype.disconnect;

    activateCustomAudioNode();
  });
  after(function() {
    global.AudioNode.prototype.connect = this.AudioNode$connect;
    global.AudioNode.prototype.disconnect = this.AudioNode$disconnect;
  });
  it("works", function() {
    var audioContext = new global.AudioContext();
    var oscillator = audioContext.createOscillator();
    var customAudioNode = new CustomAudioNode(audioContext);
    var compressor = audioContext.createDynamicsCompressor();

    oscillator.connect(customAudioNode);
    customAudioNode.connect(compressor);
    compressor.connect(audioContext.destination);

    assert(audioContext.destination.$isConnectedFrom(compressor));
    assert(compressor.$isConnectedFrom(customAudioNode.outlet));
    assert(customAudioNode.inlet.$isConnectedFrom(oscillator));

    oscillator.disconnect(customAudioNode);
    customAudioNode.disconnect();
    compressor.disconnect();

    assert(!audioContext.destination.$isConnectedFrom(compressor));
    assert(!compressor.$isConnectedFrom(customAudioNode.outlet));
    assert(!customAudioNode.inlet.$isConnectedFrom(oscillator));
  });
});
