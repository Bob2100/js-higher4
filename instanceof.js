let arr = [1, 2];
let person = { name: 'Bob', age: 30 };
let sayHi = function () {
  console.log('Hi');
}

console.log(1 instanceof Object);//false
console.log('str' instanceof Object);//false
console.log(true instanceof Object);//false
console.log(null instanceof Object);//false
console.log(undefined instanceof Object);//false
console.log(arr instanceof Object);//true
console.log(person instanceof Object);//true
console.log(sayHi instanceof Object);//true

console.log(typeof 1);//number
console.log(typeof 'str');//string
console.log(typeof true);//boolean
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof arr);//object
console.log(typeof person);//object
console.log(typeof sayHi);//function

//instanceof是通过原型的constructor来判断的
person.__proto__ = null;
console.log(person instanceof Object);//false

//如何判断一个对象是非函数的对象
function isObjectNotFunction(obj) {
  return (obj instanceof Object) && (typeof obj != 'function')
}
console.log(isObjectNotFunction(sayHi));//false
console.log(isObjectNotFunction(arr));//true
console.log(isObjectNotFunction({}));//true