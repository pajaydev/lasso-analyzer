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
    generateHTML(tree);

    //console.log(lassoHTML);
}

function generateHTML(tree) {


    let lassoHTML = fs.readFileSync(path.resolve('static/lasso-analyze.html')).toString();

    lassoHTML = replaceJS(lassoHTML);
    lassoHTML = replaceCSS(lassoHTML);
    console.log(lassoHTML);

    const treeToString = JSON.stringify(tree).replace(/"/g, '\'');
    //console.log(treeToString);
    lassoHTML = lassoHTML.replace('---LASSOTREEDATA---', treeToString);
    fs.writeFileSync(process.cwd() + '/lasso-analyze.html', lassoHTML);

}

function replaceJS(lassoHTML) {
    const webtreeJs = fs.readFileSync(path.resolve('static/webtreemap.js'), 'utf8');
    const data = '<script type="text/javascript">' + webtreeJs + '</script>';
    lassoHTML = lassoHTML.replace('<!-- @@WEBTREEMAPJS -->', data);
    return lassoHTML;
}

function replaceCSS(lassoHTML) {
    const webtreeCss = fs.readFileSync(path.resolve('static/webtreemap.css'), 'utf8');
    lassoHTML = lassoHTML.replace('<!-- @@WEBTREEMAPCSS -->', webtreeCss);
    return lassoHTML;
}

bundleAnalyzer('src/build.js');