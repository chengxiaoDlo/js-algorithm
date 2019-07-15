// 用requestAnimationFrame实现setTimeout和setInterval

window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(cb) {
      window.setTimeOut(cb, 1000 / 60)
    }
})();

function setTimeOut (cb, timeout) {
  let timer;
  let startTime = +new Date();
  let done = false;
  const fn = () => {
    timer = requestAnimationFrame(fn);
    if (+new Date() - startTime >= timeout && !done) {
      done = true;
      cb(timer);
    }
  };
  timer = requestAnimationFrame(fn);
  return timer
}

function setInterval (cb, timeout) {
  let timer;
  let startTime = +new Date();
  let endTime = startTime;
  const fn = () => {
    timer = requestAnimationFrame(fn);
    endTime = +new Date();
    if (endTime - startTime >= timeout) {
      cb(timer);
      startTime = endTime;
    }
  };
  timer = requestAnimationFrame(fn);
  return timer
}

// 回到顶部
function toTop (step) {
  requestAnimationFrame(function fn() {
    let y = window.pageYOffset;
    if (y > 0) {
      y = y - step;
      window.scrollTo(0, y);
      requestAnimationFrame(fn);
    }
  })
}