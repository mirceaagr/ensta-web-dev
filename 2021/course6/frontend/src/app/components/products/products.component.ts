import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { IProduct } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:IProduct[]
  public testVar:string;
  public err:string = "";
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.testVar = this.rest.testVar;
    this.rest.getProducts().subscribe(
      (products:IProduct[]) => {
        this.products = products;
      },
      err => {this.err = err}
    )
  }



  deleteInsideParentComponent(productId) {
    this.rest.deleteProduct(productId)
      .subscribe(() => this.getProducts())
    // we call the service and delete the products
  }

}
