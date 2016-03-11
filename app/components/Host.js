var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PlayerListContainer = require('../containers/PlayerListContainer');

function Host() {
    return ( 
        <div>
            <h1>Waiting for players</h1>
            <PlayerListContainer />
            <button>Start Game</button>
        </div>
    )
}

module.exports = Host;
