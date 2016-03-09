var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Webalon = require('../game-core/webalon');
var p2pHelper = require('../utils/p2pHelper');

var players = [{
    name: 'John'
}, {
    name: 'Jane'
}];

var PlayerList = React.createClass({
    render: function(){
        <ul>
            {players.map(function(object, idx){
                return <li key={idx}>{object.name}</li>
            })}
        </ul>
    }
})

function Host() {
    var webalonInstance = new Webalon();
    webalonInstance.initialize();
    p2pHelper.initializeP2P();
    console.log(webalonInstance.getBoardStats());
    return ( 
        <div>
            <h1>Waiting for players</h1>
            <PlayerList />
            <button>Start Game</button>
        </div>
    )
}

module.exports = Host;
