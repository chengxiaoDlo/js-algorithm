function debounce (fn, delay) {
    let timer;
    return function () {
        const self = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(self, arguments)
        }, delay)
    }
}
function throttle (fn, delay) {
    let start = 0;
    return function () {
        const now = +new Date();
        if (now - start > delay) {
            fn.apply(this, arguments);
            start = now;
        }
    }
}