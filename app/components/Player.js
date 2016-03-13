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
        webalonPeerInstance.initializeP2PPlayer(null, function(){

        });
    },
    connectToHost: function(){
        webalonPeerInstance.connectToPeer('webalon1', function(err, connection){
            connection.on('open', function(){
                connection.send('test');
            });        
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
