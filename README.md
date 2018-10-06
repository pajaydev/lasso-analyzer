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


<p align="center">
    <img alt="lasso-analyzer" src="https://raw.githubusercontent.com/ajay2507/lasso-analyzer/master/example/lasso-analyze.png" width="512">
</p>

## Usage as CLI ##

1. Bundled file is created under "build/static/" folder. Run the CLI as shown below

```bash
lasso-analyzer <--bundle path-->
```

For Example:

a. Options to provide direct Output js file.
``` bash
lasso-analyzer static/build.js
```
or

b. Options to provide Output Folder like this, it iterates entire folder and create lasso-analyze.html.

``` bash
lasso-analyzer static
```

2. lasso-analyze.html file is created in root path of your project structure.

``` bash
open lasso-analyze.html
```
3. It shows you a treemap visualization as shown below.


## Issues ##
Free feel to create bug or propose improvements.

 
