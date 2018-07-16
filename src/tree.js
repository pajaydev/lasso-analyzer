// Inspired from https://github.com/evmar/webtreemap/blob/master/tree.ts

class Tree {
    constructor(options) {
        this.packageName = options.packageName || '';
        //https://github.com/evmar/webtreemap/blob/master/oldapi.ts#L10
        this.size = {
            '$area': options.size || 0
        };
        this.children = options.children || [];
        this.path = options.path || '/';
    }

    setPackageName(name) {
        this.packageName = name;
    }
    setSize(size) {
        this.size.$area = size;
    }
    setChildren(children) {
        this.children.push(children);
    }
    setPath(path) {
        this.path = path;
    }
    getSize() {
        return this.size.$area;
    }
    // add new nodes 
    addNodeToTree(source, tree) {
        console.log("inside add node" + source.path);
        const parts = source.path.split('/');
        let node = tree;
        const nodeSize = node.getSize();
        node.setPackageName(source.packageName);
        node.setSize(nodeSize + source.size);
        parts.forEach(function (part) {
            var child = node.children.find(function (child) { return child.name == part; });
            if (!child) {
                var child = new Tree(part);
                node.children.push(child);
            }
            node = new Tree(child);
        });
        //console.log(tree);
    };
};

module.exports = Tree;