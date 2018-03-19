function debounce (fn, delay) {
    var timer;
    return function () {
        var self = this;
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(self, arguments)
        }, delay)
    }
}
function throttle (fn, delay) {
    var start = 0;
    return function () {
        var now = +new Date();
        if (now - start > delay) {
            fn.apply(this, arguments);
            start = now;
        }
    }
}