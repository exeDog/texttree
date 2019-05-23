const fs = require('fs');
const path = require('path');

const EXCLUSION_LIST = ['.git','node_modules','.sass_cache','.idea'];

function walk(folder, data) {
    let folderContent = fs.readdirSync(folder),
        folderLength = folderContent.length,
        folderName = path.basename(folder);

    data.contents = [];

    if(EXCLUSION_LIST.indexOf(folderName) !== -1 ) {
        return null;
    }

    for(let i =0; i < folderLength; i++) {

        let content = folderContent[i],
            contentPath = path.join(folder, content),
            isFolder = fs.lstatSync(contentPath).isDirectory();
            data.name = folderName;
        if (isFolder) {
            data.contents.push(walk(contentPath, {}));
        } else {
            data.contents.push(content);
        }
    }
    return data;


}

module.exports = walk;
