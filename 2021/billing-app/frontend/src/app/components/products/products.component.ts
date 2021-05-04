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
  public err:string = "";
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = null;
    this.rest.getProducts().subscribe(
      (products:IProduct[]) => {
        this.products = products;
      },
      err => {this.err = err}
    )
  }

  deleteProduct(productId) {
    this.rest.deleteProduct(productId)
      .subscribe(() => {
        this.getProducts();
      })
  }

}
