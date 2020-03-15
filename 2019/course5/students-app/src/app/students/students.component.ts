import { Component, OnInit } from '@angular/core';
import { Student } from '../models/students';
import { GetStudentsService } from '../get-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  constructor(private studentService: GetStudentsService) {


  }

  ngOnInit() {
    this.students = this.studentService.getStudents();

  }

}
