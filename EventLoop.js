// const s = new Date().getSeconds();

// //这个时间指的是函数被加入消息队列的延迟时间，并不是等待多久执行这个函数
// setTimeout(function () {
//   // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);

// while (true) {
//   if (new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

// 以 0 为第二参数调用 setTimeout 并不表示在 0 毫秒后就立即调用回调函数。仅仅表示立即加入消息队列，什么时候执行，取决于
//消息队列前还有多少消息没被处理
(function () {

  console.log('这是开始');

  setTimeout(function cb() {
    console.log('这是来自第一个回调的消息');
  });

  console.log('这是一条消息');

  setTimeout(function cb1() {
    console.log('这是来自第二个回调的消息');
  }, 0);

  console.log('这是结束');

})();

// "这是开始"
// "这是一条消息"
// "这是结束"
// "这是来自第一个回调的消息"
// "这是来自第二个回调的消息"