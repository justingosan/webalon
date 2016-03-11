var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home() {
    return ( 
    <div>
        <h1>Webalon</h1>
        <h2>What's your role?</h2>
        <Link to='/host'>
            <button>Host</button>
        </Link>
        <button>Host & Player</button>
        <Link to='/player'>
            <button>Player</button>
        </Link>
    </div>
    )
}

module.exports = Home;
