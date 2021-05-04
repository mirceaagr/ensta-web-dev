import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  public submitted = false;
  public errorMessage = null;
  public loading = false;

  constructor(private rest:RestService) {
   
  }

  addProduct(product) {
    this.loading = true;
    this.rest.postProduct(product)
      .subscribe(
        () => {
          this.submitted = true;
        },
        err => {
          this.errorMessage = err.message
        },
        () => {
          this.loading = false;
        }
      )
  }
  ngOnInit(): void {
  }

}
