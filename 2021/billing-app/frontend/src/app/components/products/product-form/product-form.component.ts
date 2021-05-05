import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() onFormSubmit:EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Input() submited: boolean = false;
  @Input() submitBtnLabel = "Add Product";
  @Input() successMessage = "Product has been created";
  @Input() errorMessage = null;
  @Input() loading = false;
  @Input() title = "Add New Product"
  @Input() product:IProduct;


  constructor(private rest:RestService) {

   }

  ngOnInit(): void {
    if(this.product == null) {
      this.product = {
        description: "",
        name: "",
        picture: "",
        price:null
      }
    }
  }

  public testForm(form) {
    console.log(form);
  }

  public onSubmit(product) {
    this.onFormSubmit.emit(product);
  }


}
