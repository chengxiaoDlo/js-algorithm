//------------------------------------------------通过reduce实现map------------------------------------------------
function map (arr, fn) {
    return arr.reduce(function (result, x) {
        result.push(fn(x))
        return result
    }, [])
}