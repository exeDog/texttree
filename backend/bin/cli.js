#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const run = require('npm-run').execSync;

let _walk = require('../src/walk');
let textree = require('../src/texttree');
let DEFAULT_FOLDER = process.cwd();

function _init() {
    let params = _getCliParams();
    let folder = _getFolderToWalk(params);
    if (fs.lstatSync(folder).isDirectory()) {
        let data = _walk(folder, {});
        if (data) {
            console.log(textree(data));
            run("npm run dev");

        }
    } else {
        _usage(folder);
        process.exit();
    }

}

function _getCliParams() {
    let params = [];
    let args = process.argv;
    for (let arg = 0; arg < args.length; arg++) {
        if (arg > 1) {
            params.push(args[arg]);
        }
    }
    return params;
}

function _getFolderToWalk(params) {
    let folder;
    if (params && params.length > 0) {
        folder = params[0];
    }
    return folder || DEFAULT_FOLDER;
}


function _usage(input) {
    console.log('"' + input + '" is not a directory. Exiting.');
}

_init();
