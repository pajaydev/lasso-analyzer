#!/usr/bin/env node
'use strict';

const parseArgs = require('minimist');
const lassoAnalyzer = require('../src/index');
const { createBundle } = require('bundle-me');
const argv = parseArgs(process.argv.slice(2));
const borderX = `${Array(30).join('-')}\n`;
// extract input file.
const input = argv._ || [];
// extract output file.
let outputFile = parseArgs(process.argv).output;
let colors = parseArgs(process.argv).c;
colors = colors ? true : false;

if (input.length > 0) {
    input.map((fileName) => {
        createBundle({ path: fileName, outputPath: 'lasso-analyze.js' }).createBundle;
        lassoAnalyzer('lasso-analyze.js', { outputFile, colors });
    });
    outputFile = outputFile || 'lasso-analyze';
    const startLog = `${borderX}` + `${outputFile}.html is created \n` +
        `${borderX}`;
    console.log(startLog);
} else {
    console.log("No input provided\nUsage: lasso-analyzer < bundle.js >");
    return process.exit(1);
}