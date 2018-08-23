#!/usr/bin/env node
'use strict';

const parseArgs = require('minimist');
const lassoAnalyzer = require('../src/index');

const argv = parseArgs(process.argv.slice(2));
const borderX = `${Array(30).join('-')}\n`;
const input = argv._ || [];

if (input.length > 0) {
    input.map((fileName) => {
        lassoAnalyzer(fileName);
    });
    const startLog = `${borderX}` + `lasso-analyze.html is created \n` +
        `${borderX}`;
    console.log(startLog);
} else {
    console.log("No input provided\nUsage: lasso-analyzer < bundle.js >");
    return process.exit(1);
}