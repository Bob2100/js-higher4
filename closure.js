//var 声明的是全局变量，最后i的值是10
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//JS中的for循环体比较特殊，每次执行都是一个全新的独立的块作用域，用let声明的变量传入到 for循环体的作用域后，不会发生改变
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

function createFn() {
  var arr = [];
  for (var i = 0; i < 3; ++i) {
    arr[i] = function () {
      return i;
    }
  }
  // console.log(i);
  return arr;
}
var arrFn = createFn();
console.log(arrFn[0]());// 3