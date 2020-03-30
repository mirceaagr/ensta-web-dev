// console.log(1==1);
// console.log(1===1);
// console.log(1!==1);
// console.log(1!=1);
// console.log(1=="1");
// console.dir(String);

const age = 5;
let message = age > 10 ? "Older than 10" : "Younger than 10";

// let arr = new Array(3);
// console.log(arr);
// let arr2 = [];
// console.log(arr2);
// console.dir(arr2);
// const arr3 = ['cherry', 'apple'];
// arr3.push('pear')
// console.log(arr3);
// arr3.pop();
// console.log(arr3);
// arr3.unshift("banana");
// console.log(arr3);
// arr3.shift(1);
// console.log(arr3);
// arr3.push(1.2);
// console.log(arr3);
// arr3.push([1,2,3]);
// console.log(arr3);

let arr = ["banana", "cherry", 'apple', 'grape'];
// arr.forEach((element, index) => {
//     console.log(element, ' -> ', index);
// })

//console.log(arr.indexOf("banana"));
console.dir(arr);
// console.log(arr.length);
// for (let i = 0; i <arr.length; i++){
//     console.log(i);
// }

// for(let fruit of arr){
//     console.log(fruit);
// }

// arr.map(elem => {
//     console.log(elem);
// })

let map = new Map();
map.set("fruits", ['banana','grape','banana']);
map.set("vegetables", ['onion','carrot']);

for(let [key, value] of map) {
    console.log(key + " = " + value);
}
console.dir(map);

let set = new Set([1,'fruit','banana','banana']);
console.log(set);
set.forEach(elem => console.log(elem));
console.dir(set);



