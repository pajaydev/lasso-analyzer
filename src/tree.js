// Inspired from https://github.com/evmar/webtreemap/blob/master/tree.ts

class Node {
    constructor(options) {
        this.packageName = '';
        this.size = '';
        this.children = [];
    }

    setPackageName(name) {
        this.packageName = name;
    }
    setSize(size) {
        this.size = size;
    }
    setChildren(children) {
        this.children = children;
    }
}