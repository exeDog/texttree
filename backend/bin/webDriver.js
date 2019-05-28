const fs = require('fs');

let websocketDriver = {
    data : [],
    _get: function () {
        console.log(this.data);
        return this.data;
    },

    _getDataFromCli: function (data) {
      this.data = data;
    },

};

module.exports =  websocketDriver;
