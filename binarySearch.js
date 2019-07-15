//------------------------------------------------二分查找（递归）------------------------------------------------
function binarySearchWithRecursive (arr, key, low, high) {
    const mid = Math.floor((low + high) / 2);
    if (low > high) {
        return -1;
    }
    if (arr[mid] === key) {
        return mid;
    } else if (arr[mid] > key) {
        return binarySearchWithRecursive(arr, key, low, mid - 1)
    } else if (arr[mid] < key) {
        return binarySearchWithRecursive(arr, key, mid + 1, high)
    }
}
//------------------------------------------------二分查找（非递归）------------------------------------------------
function binarySearchWithoutRecursive (arr, key) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            high = mid - 1;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            return -1
        }
    }
}