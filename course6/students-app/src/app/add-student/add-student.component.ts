import { Component, OnInit } from '@angular/core';
import { Student } from '../models/students';
import { GetStudentsService } from '../get-students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  uglyBoy:Student;	

  constructor(private studentService: GetStudentsService) { 

  }

  ngOnInit() {
  	this.uglyBoy = {
  		name:"",
  		age	: null,
  		address : "",
  		grades : [],
  	}
 
  }

  onSubmit(){
  	 	this.studentService.postStudent(this.uglyBoy).subscribe(
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
