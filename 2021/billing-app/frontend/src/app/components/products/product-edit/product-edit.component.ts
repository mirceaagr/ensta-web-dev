import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public product:IProduct = null;
  public loading = false;
  public submitted = false;
  public errorMessage = null;

  constructor(
    private route:ActivatedRoute,
    private restService:RestService
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  updateProduct(product) {
    this.loading = true;
    product.id = this.product.id;
    this.restService.putProduct(product)
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

  getProduct() {
    this.restService.getProduct(this.route.snapshot.params.id)
      .subscribe( (product) => {
        this.product = product;
      },
      err => console.log(err)
      
      )
  }

}
