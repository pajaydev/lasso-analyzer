# lasso-analyzer

[![npm version](https://badge.fury.io/js/lasso-analyzer.svg)](https://badge.fury.io/js/lasso-analyzer)
[![Build Status](https://travis-ci.org/ajay2507/lasso-analyzer.svg?branch=master)](https://travis-ci.org/ajay2507/lasso-analyzer)

Lasso-analyzer is a tool for analyzing project bundles created by Lasso. We can easily catch the large and/or duplicate modules which might be either bloating up
your bundle.

This package uses [treemap](#https://github.com/evmar/webtreemap) for visualiztion.
## Installation ##

``` bash
npm install -g lasso-analyzer
```

## Usage as plugin ##

```js
require('lasso').configure({
    ...
    plugins: [
        'lasso-analyzer',
        ...
    ]
});
```
Creates lasso-analyze.html in your project directory.

## Usage as CLI ##
1. make the bundlingEnabled flag to true in config.json
``` bash
"bundlingEnabled": true,
"outputDir": "build/static/",
```
2. Bundled file is created under "build/static/" folder. Run the CLI as shown below

```bash
lasso-analyzer <--bundle path-->
```

For Example:

``` bash
lasso-analyzer build/static/index.js
```
3. lasso-analyze.html file is created in root path of your project structure.

``` bash
open lasso-analyze.html
```
4. It shows you a treemap visualization as shown below.


## Issues ##
Free feel to create bug or propose improvements.

 
