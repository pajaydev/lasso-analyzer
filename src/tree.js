// Inspired from https://github.com/evmar/webtreemap/blob/master/tree.ts
'use strict';
const randomColor = require('randomcolor');
class Tree {
    constructor(fileName) {
        this.name = fileName || '';
        //https://github.com/evmar/webtreemap/blob/master/oldapi.ts#L10
        this.data = {
            '$area': 0
        };
        this.children = [];
        this.className = '';
        this.enableColors = false;
    }

    setFileName(name) {
        this.name = name;
    }
    getFileName() {
        return this.name;
    }
    setEnableColors(enableColors) {
        this.enableColors = enableColors;
    }
    isColorEnabled() {
        return this.enableColors;
    }
    setSize(size) {
        this.data.$area = size;
    }
    setChildren(children) {
        this.children.push(children);
    }
    setPath(path) {
        this.path = path;
    }
    getSize() {
        return this.data.$area;
    }
    setClassName(className) {
        this.className = className;
    }
    // add new nodes 
    createNode(source, tree, enableColors) {
        const parts = source.path.split('/');
        let node = tree;
        node.data['$area'] += source.size;
        let color = randomColor({ hue: 'green' });
        parts.forEach((part) => {
            let child = node.children.find(function (child) {
                return child.name == part;
            });
            if (!child) {
                child = new Tree(part);
                applyColor(child, color, enableColors);
                node.children.push(child);
            }
            node = child;
            node.data['$area'] += source.size;
        });
    }

    createTile(node, totalSize) {
        const size = node.data['$area'];
        const percentage = 100.0 * size / totalSize;
        node.name += ' • ' + bytesToSize(size) + ' • ' + percentage.toFixed(1) + '%';
        node.children.forEach((eachNode) => {
            this.createTile(eachNode, totalSize)
        });
    }
};
// convert bytes in to KB, MB, etc.
// https://stackoverflow.com/a/18650828/388951
function bytesToSize(bytes, decimals) {
    if (bytes == 0) return '0 B';
    let k = 1000,
        dm = decimals || 2,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function applyColor(child, color, enableColors) {
    if (enableColors) child.setClassName(color);
}

module.exports = Tree;