#!/usr/bin/env node
'use strict';

const parseArgs = require('minimist');
const lassoAnalyzer = require('../src/index');
const bundleMe = require('bundle-me');
const argv = parseArgs(process.argv.slice(2));
const borderX = `${Array(30).join('-')}\n`;
const input = argv._ || [];

if (input.length > 0) {
    input.map((fileName) => {
        bundleMe({ path: fileName, outputPath: 'lasso-analyze.js' }).createBundle;
        lassoAnalyzer('lasso-analyze.js');
    });
    const startLog = `${borderX}` + `lasso-analyze.html is created \n` +
        `${borderX}`;
    console.log(startLog);
} else {
    console.log("No input provided\nUsage: lasso-analyzer < bundle.js >");
    return process.exit(1);
}