//------------------------------------------------冒泡-----------------------------------------------
function bubble (arr) {
    if (arr.length <= 1) {
        return arr
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i -1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] =  temp;
            }
        }
    }
    return arr
}
//------------------------------------------------快排------------------------------------------------
function quickSort (arr) {
    if (arr.length <= 1) {
        return arr
    }
    const baseIndex = Math.floor(arr.length / 2),
      base = arr.splice(baseIndex, 1)[0],
      left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] < base) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([base], quickSort(right))
}
//------------------------------------------------插入排序------------------------------------------------
function insert (arr) {
    let key, len = arr.length;
    for (let i = 0; i < len; i++) {
        let j = i;
        key = arr[i];
        while (--j > -1) {
            if (arr[j] > key) {
                arr[j+1] = arr[j]
            } else {
                break;
            }
        }
        arr[j + 1] = key;
    }
    return arr
}