//------------------------------------------------深度优先（递归）------------------------------------------------
function deepTraversal(node) {
    if (!node || node.length === 0) {
        return
    }
    const result = [];
    node.forEach(item => {
        function map(data) {
            result.push(data);
            if (data.children && data.children.length > 0) {
                data.children.forEach(child => map(child))
            }
        }
        map(item);
    })
    return result.join('')
}
//------------------------------------------------深度优先（非递归）------------------------------------------------
function deepTraversal2 (node) {
    if (!node || node.length < 1) {
        return;
    }
    let stack = [];
    for (let i = 0; i < node.length; i++) {
        stack.push(node[i]);
    }
    let item;
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
    let stack = [];
    for (var i = 0; i < node.length; i++) {
        stack.push(node[i])
    }
    let item;
    while (stack.length > 0) {
        item = stack.shift();
        console.log(item.name);
        if (item.children && item.children.length > 0) {
            stack = stack.concat(item.children)
        }
    }
}
