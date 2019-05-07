// 实现一个promise
const PENDING = 'pending'
const RESOLVED = 'resolve'
const REJECTED = 'rejected'

function myPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null // 保存resolve或reject传入的值
  // 二者用来保存then中的回调
  that.resolveCallbacks = []
  that.rejectCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value // 将传入的值赋值给value
      that.resolveCallbacks.map(cb => cb(that.value)) // 遍历回调数组并执行
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectCallbacks.map(cb => cb(that.value))
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  // 两个都是可选参数，所以要判断参数类型
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
  if (that.state === PENDING) {
    that.resolveCallbacks.push(onFulfilled)
    that.rejectCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}