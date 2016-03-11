var _ = require('lodash');
var async = require('async');

var databaseHelper = require('../utils/databaseHelper');

function Webalon() {
    this.boardDBDefaults = {
        options: {
            voteTimer: 60
        },
        boardStateDB: {
            completedQuests: 0,
            successfulQuests: 0,
            failedQuests: 0
        }
    };

    this.playerDBDefaults = {};
}

Webalon.prototype.initialize = function(callback) {
    var self = this;
    var jobs = [];

    jobs.push(function(cb){
        self.boardDB = databaseHelper.initData(self.boardDBDefaults, 'boardDB', cb);
    });

    jobs.push(function(result, cb){
        self.playerDB = databaseHelper.initData(self.playerDBDefaults, 'playerDB', cb);
    });

    async.waterfall(jobs, callback);

    return this;
};

Webalon.prototype.addPlayer = function(){

};

Webalon.prototype.getBoardStats = function(cb){
    return this.boardDB.get('boardDB', cb);
};



var initializeGame = function() {};

var initializeBoard = function() {};

module.exports = Webalon;
