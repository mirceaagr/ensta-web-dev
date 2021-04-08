// let lorem = "lorem ipsum dolor sit a met";
// console.log(lorem);
// console.log(lorem.split(" "));
// console.log(lorem.toUpperCase());
// console.log(lorem.replace("lorem", "Mircea"));
// console.log(lorem.substr(0, 10));


function add(p1, p2) {
    return p1 + p2;
}

let addArrow = (p1, p2) => p1 + p2


function substract(p1, p2) {
    console.log(this);
    return p1 - p2;
}

let substractArrow = (p1, p2) => {
    console.log(this);
}

function whosTheBest(person) {
    return `Not only ${person} is the best but also ${person} enjoys data structures`;
    //return person + " is the best";
}

const whosTheBestArrow = person => `${person} is the best`

function callStudents(...students) {
    students.forEach((student)=>{
        console.log("Student " + student + " is the best");
    })
}

// console.log(add("111" , 1));
// console.log(substract("111", 1));
// console.log(whosTheBest("Gabriel"));
// callStudents("Nicolas", "Gabriel", "Camille", "Another Student");
// console.log(addArrow("10", 4));
// console.log(whosTheBestArrow("Corentin"));
// console.log(substractArrow(11, 4));

let scoreExam = (student = "Camille", grade = 20) => {
    if(student == null) return;
    if(grade == null) return;
    
    switch(student) {
        case 'Camille':
            grade++;
        break;
        case 'Nicolas':
        case 'Corentin':
            grade--;
        break;
        case 'Gabriel':
            grade = Math.floor( grade / 3 );
        break;
        case 'Sebastien':
            grade = grade + 5;
        default:
            grade = Math.floor( Math.random() * 20);
    }

    return {student, grade};
}

console.log(scoreExam());
console.log(scoreExam("Gabriel"));
console.log(scoreExam("Gabriel", 20));








