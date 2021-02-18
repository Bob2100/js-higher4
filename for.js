let arr = ['a', 'b', 'c'];
let person = {
  name: 'Bob',
  age: 18
}

//for in
for (let item in arr) {
  console.log(item);//item是脚标
  //0
  //1
  //2
}
for (let item in person) {
  console.log(item);
  //name
  //age
}

//for of
for (let item of arr) {
  console.log(item);//item是项
}
for (let item of person) {//error
  console.log(item);
}