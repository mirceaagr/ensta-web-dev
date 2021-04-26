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
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.testVar = this.rest.testVar;
    this.products = this.rest.products;
  }

}
