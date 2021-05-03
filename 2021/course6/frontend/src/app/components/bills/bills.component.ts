import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { IProduct } from '../products/product.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  public testVar;
  public products:IProduct[];
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.testVar = this.rest.testVar;
    this.products = this.rest.products;
  }

}
