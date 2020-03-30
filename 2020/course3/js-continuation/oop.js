function Person(firstName, lastName, db) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.db = db;
}

Person.prototype.getName = function() {
    return `${this.firstName} ${this.lastName}`;
}

class Student {
    constructor( name, age ) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return ""+this._name;
    }

    get age() {
        return this.age;
    }

    set name(name) {
        this._name = name;
    }

    isOld = () => {
        return this._age > 18;
    }

    isYoung(){
        return this._age <= 18;
    }
}

let person = new Person("Mircea", "Agrigoroaie", "10-10-2010");
console.log(person.getName());

let student = new Student(1010, 21);
console.log(typeof student.name);
console.log(student.isOld());
console.log(student.isYoung());

const animal = {
    legs: 4,
    eyes: 2
}
let {legs, eyes} = animal;
let {name, age} = student;
console.log(legs);
console.log(eyes);
console.log(name);
console.log(age);

