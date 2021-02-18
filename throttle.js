//节流函数,限制一个函数在规定的时间内只能执行一次
//对于mousemove之类的事件可能并不是每次都要执行回调函数，这时使用节流函数可以提高性能
function throttle(fn, wait) {
  let pre = Date.now();
  return function () {
    let now = Date.now()
    if (now - pre >= wait) {
      fn();
      pre = Date.now();
    }
  }
}

window.addEventListener('mousemove', throttle(() => {
  console.log(new Date().getSeconds());
}, 1000));//1秒钟执行一次