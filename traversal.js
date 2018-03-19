//------------------------------------------------深度优先（递归）------------------------------------------------
function deepTraversal1 (node) {
    if (!node || node.length < 1) {
        return;
    }
    for (var i = 0; i < node.length; i++) {
        var childrens = node.children;
        console.log(node[i].name)
        if (childrens && childrens.length > 0) {
            deepTraversal1(childrens)
        }
    }
}
//------------------------------------------------深度优先（非递归）------------------------------------------------
function deepTraversal2 (node) {
    if (!node || node.length < 1) {
        return;
    }
    var stack = [];
    for (var i = 0; i < node.length; i++) {
        stack.push(node[i]);
    }
    var item;
    while (stack.length) {
        item = stack.shift();
        console.log(item.name);
        if (item.children && item.children.length > 0) {
            stack = item.children.concat(stack)
        }
    }
}
//------------------------------------------------广度优先（非递归）------------------------------------------------
function wideTraversal (node) {
    if (!node || node.length < 1) {
        return
    }
    var stack = [];
    for (var i = 0; i < node.length; i++) {
        stack.push(node[i])
    }
    var item;
    while (stack.length > 0) {
        item = stack.shift();
        console.log(item.name);
        if (item.children && item.children.length > 0) {
            stack = stack.concat(item.children)
        }
    }
}