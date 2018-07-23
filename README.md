# lasso-analyzer

Lasso-analyzer is a tool for analyzing project bundles created by Lasso. We can easily catch the large and/or duplicate modules which might be either bloating up
your bundle.

## Installation ##

``` bash
npm install -g lasso-analyzer
```

## Usage ##

1. make the bundlingEnabled flag to true in config.json
``` bash
"bundlingEnabled": true,
"outputDir": "build/static/",
```
2. Bundled file is created under "build/static/" folder. Run the CLI as shown below
``` bash
lasso-analyzer build/static/index.js
```
3. lasso-analyze.html file is created in root path of your project structure.

``` bash
open lasso-analyze.html
```
## Command-Line Interface Support ##

``` bash
lasso-analyzer <--bundle file path-->
```