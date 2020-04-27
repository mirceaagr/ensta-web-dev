import { Component, OnInit } from '@angular/core';

export interface IUser{
  username:string,
  password: string,
  role: "regular" | "admin"
}

export interface IRole{
  value:string,
  label:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:IUser={
    username:"",
    password:"",
    role:"regular"
  };
  roles:IRole[] = [
    {
      value:"",
      label:"---EMPTY---"
    },
    {
      value:"regular",
      label:"REGULAR USER",
    },
    {
      value:"admin",
      label:"ADMINISTRATOR"
    }
  ]
  constructor() { }

  ngOnInit(): void {

    // setInterval(()=>{
    //   this.user.username += 1;
    // },200)
  }

  debug(form) {
    console.log(form);
  }

  processForm(form) {
    if(form.valid) {
      // do something
      console.log(form.value)
    }else{
      alert('Stopp itttt');
    }
  }

}
