var peerjs = require('peerjs');

var config = require('../config');

function initializeP2P(){
    var peer = new peerjs({key: config.PEERJS_API_KEY});

    peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });

    return peer;
}

module.exports = {
    initializeP2P: initializeP2P
}