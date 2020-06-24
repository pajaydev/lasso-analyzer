#!/usr/bin/env node
'use strict';

const parseArgs = require('minimist');
const Logger = require('log-cli');
const lassoAnalyzer = require('../src/index');
const { createBundle } = require('bundle-me');
const argv = parseArgs(process.argv.slice(2));
// extract input file.
const input = argv._ || [];
// extract output file.
let outputFile = parseArgs(process.argv).output;
let colors = parseArgs(process.argv).c;
colors = colors ? true : false;
const logger = new Logger();
const spinner = logger.startSpin("Analyzing the lasso bundle");
if (input.length > 0) {
    input.map((fileName) => {
        try{
            createBundle({ path: fileName, outputPath: 'lasso-analyze.js' }).createBundle;
        }catch(e){
            spinner.stop();
            logger.error("Invalid file name or folder name");
        }
        
        lassoAnalyzer('lasso-analyze.js', { outputFile, colors });
    });
    outputFile = outputFile || 'lasso-analyze';
    spinner.stop();
    logger.success(`${outputFile}.html is created`, true);
} else {
    spinner.stop();
    logger.error("Invalid input");
    logger.info("Usage: lasso-analyzer < bundle.js >");
    return process.exit(1);
}