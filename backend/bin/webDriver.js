const cli = require('./cli');

let websocketDriver = {
    _get: function () {
        return this._getDataFromCli()
    },

    _getDataFromCli: function () {
       return cli.getData;
    },

    _init: function () {
     this.data = [];
    }
};


module.exports =  websocketDriver;
