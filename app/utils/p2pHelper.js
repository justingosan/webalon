var util = require('util');

var peerjs = require('peerjs');
var async = require('async');

var config = require('../config');

var WebalonPeer = function(){
  this.MESSAGE_KEYS = [];
};

WebalonPeer.prototype._initializeBaseConnection = function(p2pId, cb){
    var _self = this;
    cb = typeof cb !== 'function' ? function(){} : cb;

    _self.peer = new peerjs(p2pId, {key: config.PEERJS_API_KEY});

    _self.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
      _self.peerId = id;
      cb(null);
    });

    _self.peer.on('error', function(err){
        console.error(err);
    });

    return this;
};

WebalonPeer.prototype._handleHostConnection = function(data){
    var _self = this;
    if(!_self.MESSAGE_KEYS.indexOf(data.messageKey) === -1){
      console.error(util.format('%s is not a valid message key', data.messageKey));
    }else{

    }
};

WebalonPeer.prototype.initializeP2PHost = function(hostId, cb){
  var _self = this;

  _self._initializeBaseConnection.call(this, hostId, function(err){
      if(!err){
        _self.peer.on('connection', function(dataConnection){
          console.log(util.format('Someone connected! Id: %s'), dataConnection.peer);
          //TODO: store peer Id here
          _self.connectToPeer(dataConnection.peer);

          _self.peer.on('data', function(data){
            console.log(data);
          });
        });
      }
  });
};

WebalonPeer.prototype.initializeP2PPlayer = function(hostId, cb){
    var _self = this;
    _self._initializeBaseConnection.call(this, hostId, function(err){
      if(!err){
        _self.peer.on('connection', function(dataConnection){
          console.log(util.format('Host has connected back! Id: %s'), dataConnection.peer);
            // TODO: Store host Id here
        });
      }
    });
};

WebalonPeer.prototype.connectToPeer = function(peerId, cb){
  var conn = this.peer.connect(peerId);
  conn.on('open', function(){
    console.log('connected to peer!');
    cb(null, conn);
  });

  conn.on('error', function(err){
    console.error(err);
    cb(err);
  });
};


WebalonPeer.prototype.sendData = function(data){
    _self.peer.send(data);
};

module.exports = WebalonPeer;