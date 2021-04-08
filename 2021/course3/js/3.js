// Arrays
let students = ["Tristan","Loric", "Loric","Camille","Sebastien", "Sebastien","Nicolas","Adam"];

let studentsArr = [
    {name:"Tristan", grade:4},
    {name:"Loric", grade:14},
    {name:"Camille", grade:6},
    {name:"Sebastien", grade:14},
    {name:"Nicolas", grade:12},
]

console.log(students);

console.dir(Array);
console.log(students.find((student)=>student == "Tristan"));
console.log(students.length);
console.log(students[students.length -1]);
students.pop();
console.log(students);
students.push("Jean Pierre");
console.log(students);
students.shift();
console.log(students);
students.unshift("Paul");
console.log(students);
console.log(students.includes("Nicolas"));

let studentNames = studentsArr.map((student)=>student.name);
console.log(studentNames);
let goodStudents = studentsArr.filter(student=>student.grade >= 10);
console.log(goodStudents);
let doWeHaveBadStudents = studentsArr.some(student => student.grade <= 10);
console.log(doWeHaveBadStudents);
let allStudentsAreGood = studentsArr.every(student => student.grade >= 10);
console.log(allStudentsAreGood);

students.reduce((previousValue, currentValue)=>{
    console.log(currentValue);
    console.log(previousValue);

    return currentValue + "🥐";

});

students.forEach((student, index) => {console.log(index, student)});

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

for(let student of students) {
    console.log(student);
}

for(let letter of "Gabriel") {
    console.log(letter);
}

let gabriel = {
    name:"Gabriel",
    skills:["Java","Python","Being Awesome"],
    age: 15,
    likesLyonFC: true
}

for(let prop in gabriel) {
    console.log(gabriel[prop]);
}

let studentKeys = students.keys();
for(let i of studentKeys) {
    console.log(i)
}

let uniqStudents = Array.from(new Set(students));
console.log(uniqStudents);

let studentMap = new Map();
studentMap.set("boys", ['Tristan','Gabriel', 'Nicolas']);
studentMap.set("girls", ['Camille']);
console.log(studentMap);

for(let [key, value] of studentMap) {
    console.log(`${key}:${value}`);
}





