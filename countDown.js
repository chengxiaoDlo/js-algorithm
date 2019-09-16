// 倒计时
function getCountDownObj (endTime) {
  const now = +new Date()
  const leftTime = Math.abs(parseInt(endTime - now))
  let [day, hour, min, sec, ms] = ['00', '00', '00', '00', '0']
  if (leftTime > 0) {
    day = addZero(parseInt(leftTime / (24 * 60 * 60 * 1000)))
    hour = addZero(parseInt(leftTime / (60 * 60 * 1000) % 24))
    min = addZero(parseInt(leftTime / (60 * 1000) % 60))
    sec = addZero(parseInt(leftTime / 1000 % 60))
    ms = addZero(parseInt(leftTime % 1000)).toString().substr(0, 1)
  }
  return { day, hour, min, sec, ms }
}

function addZero (i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}