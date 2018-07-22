// Inspired from https://github.com/evmar/webtreemap/blob/master/tree.ts

class Tree {
    constructor(fileName) {
        this.name = fileName || '';
        //https://github.com/evmar/webtreemap/blob/master/oldapi.ts#L10
        this.data = {
            '$area': 0
        };
        this.children = [];
    }

    setFileName(name) {
        this.name = name;
    }
    getFileName() {
        return this.name;
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
    // add new nodes 
    createNode(source, tree) {
        const parts = source.path.split('/');
        var node = tree;
        node.data['$area'] += source.size;
        parts.forEach(function (part) {
            let child = node.children.find(function (child) {
                return child.name == part;
            });
            if (!child) {
                child = new Tree(part);
                node.children.push(child);
            }
            node = child;
            node.data['$area'] += source.size;
        });
    };

    createTile(node, totalSize) {
        const size = node.data['$area'];
        const percentage = 100.0 * size / totalSize;
        node.name += ' • ' + size.toLocaleString() + ' • ' + percentage.toFixed(2) + '%';
        node.children.forEach((eachNode) => {
            this.createTile(eachNode, totalSize)
        });
    };
};

module.exports = Tree;