const lasso = require('lasso');
const fs = require('fs');
const path = require('path');
const isDevelopment =
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'dev';

console.log(isDevelopment);

module.exports = (lasso, config) => {
    lasso.on('beforeBuildPage', (event) => {
        // make bundle enabled = true.
        event.config.bundlingEnabled = true;
        // console.log(process);
        const context = event.context;
        // events.push('beforeBuildPage');

        context.on('bundleWritten', (event) => {
            console.log(event);
        });
    });
};