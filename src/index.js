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
        tree.createNode(source, tree);
    });

    tree.createTile(tree, tree.data['$area']);
    const webtreeJs = fs.readFileSync(path.resolve('static/webtreemap.js'));
    const webtreeCss = fs.readFileSync(path.resolve('static/webtreemap.css'));
    const lassoHTML = fs.readFileSync(path.resolve('static/lasso-analyze.html')).toString();
    console.log(lassoHTML);
    //console.log(tree);
}

bundleAnalyzer('src/build.js');