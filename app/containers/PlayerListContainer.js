var async = require('async');
var React = require('react');

var PlayerList = React.createClass({
    getInitialState: function(){
        return {
            players: [{
                name: 'Host'
            }]
        }
    },
    componentDidMount: function(){
        var _self = this;
        var jobs = [];

        jobs.push(function(cb){
            webalonInstance.initialize(); //TODO: handle duplicate error here
            cb(null);
        });

        jobs.push(function(cb){
            webalonPeerInstance.initializeP2PHost('webalon1', cb);
        })

        jobs.push(function(cb){
            webalonInstance.getBoardStats(function(err, doc){
                console.log(doc);
                cb(null);
            });
        });

        //listen for players
        jobs.push(function(){

        });

        async.waterfall(jobs)
    },
    render: function(){
        return (
            <ul>
                {this.state.players.map(function(object, idx){
                    return <li key={idx}>{object.name}</li>
                })}
            </ul>
        )
    }
});


module.exports = PlayerList;