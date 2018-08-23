const lasso = require('lasso');
const fs = require('fs');
const path = require('path');
const lassoAnalyzer = require('./index');
const borderX = `${Array(30).join('-')}\n`;
const isDevelopment =
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'dev';

module.exports = (lasso, config) => {
    lasso.on('beforeBuildPage', (event) => {
        const startLog = `${borderX}` + `Lasso Bundle Analyzer \n` +
            `${borderX}`;
        console.log(startLog);
        const context = event.context;
        context.on('bundleWritten', (event) => {
            const bundle = event.bundle;
            let bundlePath = bundle.outputFile;
            if (bundle.contentType === "js" && isDevelopment && bundlePath) {
                const fileContent = fs.readFileSync(bundle.outputFile, 'utf8');
                // if bundleEnabled = false, iterate through all files.
                if (!bundle.fingerprint && bundlePath) {
                    bundleName = getBundleName(bundle.name);
                    const filePath = path.resolve(bundleName + ".js");
                    const outputFile = process.cwd() + '/' + bundleName + '.js';
                    if (fs.existsSync(filePath) == true) {
                        fs.appendFileSync(outputFile, fileContent);
                    } else {
                        fs.writeFileSync(outputFile, fileContent);
                    }
                    bundlePath = outputFile;
                }
                // pass it to lasso-analyzer.
                if (bundlePath) {
                    lassoAnalyzer(bundlePath, bundleName);
                }

            }
        });
        const endLog = `${borderX}` + `Created lasso-analyze.html in your project structure \n` +
            `${borderX}`;
        console.log(endLog);
    });
};

// get bundle name from output path.
function getBundleName(bundleName) {
    return bundleName.split('/')[0];
}