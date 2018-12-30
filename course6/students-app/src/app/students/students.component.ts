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
  tempStudent: Student;
  constructor(private studentService: GetStudentsService) {
  	this.tempStudent = {
		"name": "POSTED StUDENt",
		"grades": [1, 2, 3, 4],
		"age": 25
	}

  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
    	(students:Student[]) =>{
    		this.students = students
    	}
    );

  }

  postStudent(){
  	this.studentService.postStudent(this.tempStudent).subscribe(
  		result => {
  			alert("Student has been posted");
  		},
  		error => {
  			console.error(error);
  			alert ("ERROR!");
  		}
  	)  
  }

}
