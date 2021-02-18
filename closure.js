//var 声明的是全局变量，最后i的值是10
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//let声明的是局部变量，以闭包的形式被里面的异步函数访问到
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}