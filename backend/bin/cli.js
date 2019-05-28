#!/usr/bin/env node
const fs=  require('fs');
const path = require('path');
const run = require('npm-run').execSync;
const websocketDriver = require('./webDriver');

let _walk = require('../src/walk');
let textree = require('../src/texttree');
let DEFAULT_FOLDER = process.cwd();

let cli = {
    _init: function() {
        let params = this._getCliParams();
        let folder = this._getFolderToWalk(params);
        this._setData();
        if (fs.lstatSync(folder).isDirectory()) {
            let data = _walk(folder, {});
            if (data) {
                this.result = textree.webdriver(data);
                websocketDriver._getDataFromCli(this.result);
                console.log(textree.textree(data));
                run("npm run play");

            }
        } else {
            this._usage(folder);
            process.exit();
        }
    },

    _setData: function() {
        this.result = [];
    },

    _getData: function() {
        return this.result;
    },

    _getCliParams: function() {
        let params = [];
        let args = process.argv;
        for (let arg = 0; arg < args.length; arg++) {
            if (arg > 1) {
                params.push(args[arg]);
            }
        }
        return params;
    },

    _getFolderToWalk: function(params) {
        let folder;
        if (params && params.length > 0) {
            folder = params[0];
        }
        return folder || DEFAULT_FOLDER;
    },


    _usage: function(input) {
        console.log('"' + input + '" is not a directory. Exiting.');
    }
};

cli._init();



