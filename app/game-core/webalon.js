var databaseHelper = require('../utils/databaseHelper');

function Webalon() {
    this.defaults = {
        options: {
            voteTimer: 60
        },
        boardStateDB: {
            players: 0,
            completedQuests: 0,
            successfulQuests: 0,
            failedQuests: 0
        },
        playersStateDB: {
            isTurn: false,
            playerChoiceVote: null,
            questVote: null
        }
    }
}

Webalon.prototype.initialize = function() {
    this.db = databaseHelper.initData(this.defaults);
    return this;
};



var initializeGame = function() {};

var initializeBoard = function() {};

module.exports = Webalon;
