import { Injectable } from '@angular/core';
import { Student } from './models/students';
import { HttpClient } from '@angular/common/http';
const STUDENTS_URL = "http://localhost:3000/students";


@Injectable({
  providedIn: 'root'
})
export class GetStudentsService {
  students: Student[] = [];
  
  constructor(private http: HttpClient) {
    
   }

   public getStudents() {
     return this.http.get(STUDENTS_URL);
   }

   public postStudent(student:Student){
     return this.http.post(STUDENTS_URL, student);
   }
}
