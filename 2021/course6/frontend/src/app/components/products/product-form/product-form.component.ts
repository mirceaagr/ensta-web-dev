import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product:IProduct
  constructor() {
    this.product = {
      description:"",
      name:"",
      picture:"",
      price:null
    }
    // show that the value in the component changes the value in the template
    //setInterval(()=>{this.product.price = Math.floor(Math.random() * 10)}, 500)
  }

  outputForm(form) {
    console.log(form)
  }

  onSubmit(formValue){
    console.log(formValue);
  }

  ngOnInit(): void {
  }

}
