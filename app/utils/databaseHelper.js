var Taffy = require('taffydb/taffy').taffy;

module.exports = {
    initData: function(data){
        var db = Taffy();
        db.store('webalon')
        db().remove();
        db.insert(data);
        return db;
    }
};