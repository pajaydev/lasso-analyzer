# lasso-analyzer

Lasso-analyzer is a tool for analyzing project bundles created by Lasso. We can easily catch the large and/or duplicate modules which might be either bloating up
your bundle.

## Installation ##

``` bash
npm install -g lasso-analyzer
```

## Command-Line Interface ##

``` bash
lasso-analyzer <--bundle file path-->
```

## Output ##

lasso-analyze.html file is created in root path of your project structure.

``` bash
lasso-analyze src/bundle.js 
open lasso-analyze.html
```