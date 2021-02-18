const s = new Date().getSeconds();

//这个时间指的是函数被加入消息队列的延迟时间，并不是等待多久执行这个函数
setTimeout(function () {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}