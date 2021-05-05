import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  public client:any;
  public clientForm: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createClientForm();

    // setInterval(() => {
    //   if(this.clientForm.get('name').disabled) {
    //     this.clientForm.get('name').enable()
    //   } else {
    //     this.clientForm.get('name').disable()
    //   }
    // }, 400)
    this.clientForm.valueChanges
      .subscribe(
        (changes) => console.log(changes)
      )
    this.disableBusinessFieldsIfNotCompany();
  }

  disableBusinessFieldsIfNotCompany() {
    this.clientForm.get('isCompany').valueChanges
      .subscribe( (isCompany ) => {
        if( !isCompany) {
          this.clientForm.get('iban').disable();
        } else {
          this.clientForm.get('iban').enable();
        }
      }
      )
  }

  addHobby() {
    (this.clientForm.get('hobbies') as FormArray).push(this.fb.control(""));
  }

  createClientForm() {
    this.clientForm = this.fb.group({
      "name":this.fb.control('', Validators.required),
      "surname": this.fb.control('', Validators.required),
      "isCompany": this.fb.control(''),
      "registrationNumber": this.fb.control(''),
      "bic": this.fb.control(''),
      "iban": this.fb.control(''),
      "hobbies":this.fb.array([

      ]),
      "address": this.fb.group({
        "street": this.fb.control(''),
        "streetNo": this.fb.control(''),
        "postalCode": this.fb.control(''),
        "city": this.fb.control(''),
      })

    })
  }

  // <!-- {
  //   "id": 1,
  //   "isCompany": "John",
  //   "surname": "Doe",
  //   "isCompany": false,
  //   "registrationNumber": null,
  //   "iban": "12345656",
  //   "bic": "1234",
  //   "address": {
  //     "street": "Rue de la Pacaterie",
  //     "streetNo": "12",
  //     "postalCode": "91400",
  //     "city": "Orsay"
  //   }
  // }, -->

  createClient() {
    if(this.clientForm.invalid){
      alert("Form invalid")
    }

    return;
  }

}
