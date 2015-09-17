var AudioNode = global.AudioNode;
var AudioNode$connect;
var AudioNode$disconnect;

function connect() {
  var args = Array.prototype.slice.call(arguments);

  if (args.length && typeof args[0].__connectFrom === "function") {
    args[0].__connectFrom.apply(args[0], [ this ].concat(args.slice(1)));
  } else {
    AudioNode$connect.apply(this, args);
  }
}

function disconnect() {
  var args = Array.prototype.slice.call(arguments);

  if (args.length && typeof args[0].__disconnectFrom === "function") {
    args[0].__disconnectFrom.apply(args[0], [ this ].concat(args.slice(1)));
  } else {
    AudioNode$disconnect.apply(this, args);
  }
}

module.exports = function() {
  if (!global.__WebAudioUtils$enableCustomAudioNode) {
    global.__WebAudioUtils$enableCustomAudioNode = true;

    AudioNode$connect = AudioNode.prototype.connect;
    AudioNode$disconnect = AudioNode.prototype.disconnect;

    AudioNode.prototype.connect = connect;
    AudioNode.prototype.disconnect = disconnect;
  }
};
