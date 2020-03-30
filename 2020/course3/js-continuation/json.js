

const student1 = {
    name: "Mircea",
    age:80,
    grade:2,
    isGoodStudent: false,
    clases:[
        "Java", "Javascript"
    ]
}

const student2 = {
    name: "Quentin",
    age:21,
    grade:2,
    isGoodStudent: true,
    clases:[
        "Java", "Javascript"
    ]
}

let students = [student1, student2];
console.log(students);

for(let i = 0; i< students.length; i++) {
    students[i].name;
}

students.forEach(student=> console.log(student.name));

let studentList = students.map(student =>student.name);
//console.dir(studentList);
console.log(studentList);
const jsonStudent = JSON.stringify(students);
console.log(jsonStudent);
const literalStudent = JSON.parse(jsonStudent);
console.log(literalStudent);

// to clarify about reduce

