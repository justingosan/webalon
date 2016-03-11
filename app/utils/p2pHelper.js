var peerjs = require('peerjs');
var async = require('async');

var config = require('../config');

var WebalonPeer = function(){
};

Webalon

WebalonPeer.prototype.initializeP2PHost = function(p2pId, cb){
    var _self = this;
    cb = typeof cb !== 'function' ? function(){} : cb;

    _self.peer = new peerjs(p2pId, {key: config.PEERJS_API_KEY});

    _self.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
      _self.peer.on('connection', function(conn){
        console.log('Someone connected!');
        conn.on('data', _self._handleConnection)

      });
      cb(null);
    });

    _self.peer.on('error', function(err){
        console.error(err);
    });

    return this;
};

WebalonPeer.prototype.initializeP2PPlayer = function(hostId, cb){
    var _self = this;
    _self.player = 
};

WebalonPeer.prototype._handleConnection = function(data){
    console.log(data);
};

WebalonPeer.prototype.sendData = function(data){
    _self.peer.send()
};

module.exports = WebalonPeer;