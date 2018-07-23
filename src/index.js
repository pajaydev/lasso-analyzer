const fs = require('fs');
const path = require('path');
const lassoUnpack = require('lasso-unpack');
const Tree = require('./tree');
const borderX = `${Array(30).join('-')}\n`;


function bundleAnalyzer(fileName) {
    // load lasso-unpack and create lasso-stats.json
    const startLog = `${borderX}` + `Lasso Bundle Analyzer \n` +
        `${borderX}`;
    console.log(startLog);
    // unpack the bundle using lasso-unpack.
    lassoUnpack(fileName);
    const readFile = fs.readFileSync(path.resolve("lasso-stats.json"), 'utf8');
    const readJSON = JSON.parse(readFile);
    if (readJSON.length > 0) {
        readJSON.shift()
    };
    const tree = new Tree('/');
    readJSON.forEach((source) => {
        tree.createNode(source, tree);
    });
    tree.createTile(tree, tree.data['$area']);
    const html = generateHTML(tree);
    fs.writeFileSync(process.cwd() + '/lasso-analyze.html', html);
    const endLog = `${borderX}` + `Created lasso-analyze.html in your project structure \n` +
        `${borderX}`;
    console.log(endLog);
}

function generateHTML(tree) {
    let lassoHTML = fs.readFileSync(path.resolve('static/lasso-analyze.html')).toString();
    // Insert webtreemap js in to lasso html.
    lassoHTML = replaceJS(lassoHTML);
    // Insert webtreemap css in to lasso html
    lassoHTML = replaceCSS(lassoHTML);
    lassoHTML = replaceTreeDate(lassoHTML, tree);
    return lassoHTML;
};

function replaceJS(lassoHTML) {
    const webtreeJs = fs.readFileSync(path.resolve('static/webtreemap.js'), 'utf8');
    const data = '<script type="text/javascript">' + webtreeJs + '</script>';
    lassoHTML = lassoHTML.replace('<!-- @@WEBTREEMAPJS -->', data);
    return lassoHTML;
};

function replaceCSS(lassoHTML) {
    const webtreeCss = fs.readFileSync(path.resolve('static/webtreemap.css'), 'utf8');
    lassoHTML = lassoHTML.replace('<!-- @@WEBTREEMAPCSS -->', webtreeCss);
    return lassoHTML;
};

function replaceTreeDate(lassoHTML, treeData) {
    const treeToString = JSON.stringify(treeData);
    return lassoHTML.replace('@@WEBTREEMAPDATA', treeToString);
}

module.exports = bundleAnalyzer;