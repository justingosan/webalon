var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Webalon = require('../game-core/webalon');

function Home() {
    var webalonInstance = new Webalon();
    webalonInstance.initialize();
    console.log(webalonInstance.db().get());
    return ( <h1> Webalon </h1>)
}

module.exports = Home;
