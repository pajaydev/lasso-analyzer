const fs = require('fs');
const path = require('path');
const lassoUnpack = require('lasso-unpack');
const Tree = require('./tree');
const borderX = `${Array(30).join('-')}\n`;





function bundleAnalyzer(fileName) {
    // load lasso-unpack and create lasso-stats.json
    const log = `${borderX}` + `Lasso Bundle Analyzer \n` +
        `${borderX}`;
    console.log(log);
    // unpack the bundle using lasso-unpack.
    lassoUnpack(fileName);
    const readFile = fs.readFileSync(path.resolve("lasso-stats.json"), 'utf8');
    const readJSON = JSON.parse(readFile);
    const tree = new Tree('/');
    readJSON.forEach((source) => {
        tree.addNodeToTree(source, tree);
    });
}

bundleAnalyzer('src/build.js');



// https://stackoverflow.com/a/18650828/388951
function formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 B';
    let k = 1000,
        dm = decimals || 2,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

