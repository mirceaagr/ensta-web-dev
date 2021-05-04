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
  public productId:number;
  public product:IProduct;
  public submitted = false;
  constructor(
    private route:ActivatedRoute,
    private restService:RestService
    ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.getProduct();
    console.log(this.productId);
  }

  editProduct(product){
    product.id = this.productId;
    this.restService.editProduct(product)
      .subscribe(() => {
        this.submitted = true;
      })
  }

  getProduct() {
    this.restService.getProduct(this.productId)
      .subscribe((product) => {
        this.product = product;
      })
  }

}
