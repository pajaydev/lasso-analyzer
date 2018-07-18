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
    addNodeToTree(source, tree) {
        const parts = source.path.split('/');
        var node = tree;
        node.data['$area'] += source.size;
        parts.forEach(function (part) {
            var child = node.children.find(function (child) {
                return child.name == part;
            });
            if (!child) {
                var child = new Tree(part);
                node.children.push(child);
            }
            node = child;
            node.data['$area'] += source.size;
        });
    };
};

module.exports = Tree;