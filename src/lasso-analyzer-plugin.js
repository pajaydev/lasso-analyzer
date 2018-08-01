const lasso = require('lasso');
const fs = require('fs');
const path = require('path');
const lassoAnalyzer = require('./index');
const isDevelopment =
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'dev';

module.exports = (lasso, config) => {
    lasso.on('beforeBuildPage', (event) => {
        // make bundle enabled = true.
        event.config.bundlingEnabled = true;
        // console.log(process);
        const context = event.context;
        // events.push('beforeBuildPage');

        context.on('bundleWritten', (event) => {
            const bundle = event.bundle;
            if (bundle.contentType === "js" && isDevelopment) {
                const fileName = getFileName(bundle);
                // read the output bundle 
                const bundleFile = bundle.outputFile;
                // pass it to lasso-analyzer.
                lassoAnalyzer(bundle.outputFile);
            }
        });
    });
};
