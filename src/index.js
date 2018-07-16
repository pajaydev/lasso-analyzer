const fs = require('fs');
const path = require('path');
const Tree = require('./tree');
const borderX = `${Array(30).join('-')}\n`;





function bundleAnalyzer(fileName) {
    // load lasso-unpack and create lasso-stats.json
    const log = `${borderX}` + `Lasso Bundle Analyzer \n` +
        `${borderX}`;
    console.log(log);
    const readFile = fs.readFileSync(path.resolve(fileName), 'utf8');
    const readJSON = JSON.parse(readFile);
    const tree = new Tree('/');
    readJSON.forEach((source) => {
        tree.addNodeToTree(source, tree);
    });

    console.log(tree);
}

bundleAnalyzer('stats.json')



// https://stackoverflow.com/a/18650828/388951
function formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 B';
    let k = 1000,
        dm = decimals || 2,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

