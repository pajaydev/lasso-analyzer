# lasso-analyzer

[![npm version](https://badge.fury.io/js/lasso-analyzer.svg)](https://badge.fury.io/js/lasso-analyzer)
[![Build Status](https://travis-ci.org/pajaydev/lasso-analyzer.svg?branch=master)](https://travis-ci.org/pajaydev/lasso-analyzer)

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

## Usage as CLI ##

1. Bundled file is created under "build/static/" folder. Run the CLI as shown below

```bash
lasso-analyzer <--bundle path--> --output <--output filename-->
```
Creates outputFilename.html in your project structure.

```bash
Options:
  --output    To change the generated output filename. (default - lasso-analyze.html)
  --c         Visualize the bundle with colors 
```

For Example:

a. Analyze js bundle file.
``` bash
lasso-analyzer static/build.js
```
or

b. Analyze all the files inside particular folder and create lasso-analyze.html.

``` bash
lasso-analyzer static
```

c. Bundle with colors

```bash
lasso-analyzer static --c
```

2. lasso-analyze.html file is created in root path of your project structure.

``` bash
open lasso-analyze.html
```

3. It shows you a treemap visualization as shown below.

## Output
Creates lasso-analyze.html in your project directory.

<p align="center">
    <img alt="lasso-analyzer" src="https://raw.githubusercontent.com/ajay2507/lasso-analyzer/master/example/lasso-analyze.png" width="512">
</p>

## Issues ##
Free feel to create bug or propose improvements.

 
