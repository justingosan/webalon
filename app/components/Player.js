var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PlayerPrompt = React.createClass({
    getInitialState: function(){
        return {
            hostId: null
        }
    },
    componentDidMount: function(){
        webalonPeerInstance.initializeP2P(null, function(){

        });
    },
    connectToHost: function(){
        window.hostConnection = webalonPeerInstance.peer.connect('webalon1');

        hostConnection.on('open', function(){
            hostConnection.send('test');
        });        

        hostConnection.on('error', function(error){
            console.error('hostConnection error', error);
        });
    },
    render: function(){
        return (
            <div>
                <label>Enter Host Id:</label>
                <input defaultValue={this.state.hostId}></input>
                <button disabled={false} onClick={this.connectToHost}>Connect</button>
            </div>
        );
    }
});

var Player = React.createClass({
    render: function(){
        return ( 
            <div>
                <h1>Connect to peer</h1>
                <PlayerPrompt>Start Game</PlayerPrompt>
            </div>
        )
    }
});

module.exports = Player;
