import { Injectable } from '@angular/core';
import { Student } from './models/students';

@Injectable({
  providedIn: 'root'
})
export class GetStudentsService {
  students: Student[] = [];
  constructor() {
    let st1: Student = {
      name: 'Student 1',
      grades: [1, 2, 3, 4],
      age: 25
    };

    let st2: Student = {
      name: 'Student 2',
      grades: [1, 2, 3, 4],
      age: 26
    };
    this.students.push(st1);
    this.students.push(st2);
   }

   public getStudents(): Student[] {
    return this.students;
   }
}
