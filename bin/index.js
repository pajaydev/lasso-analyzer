#!/usr/bin/env node
'use strict';

const parseArgs = require('minimist');
const lassoAnalyzer = require('../src/index');

const argv = parseArgs(process.argv.slice(2));

const input = argv._ || [];

if (input.length > 0) {
    input.map((fileName) => {
        lassoAnalyzer(fileName);
    });
} else {
    console.log("No input provided\nUsage: lasso-analyzer < bundle.js >");
    return process.exit(1);
}