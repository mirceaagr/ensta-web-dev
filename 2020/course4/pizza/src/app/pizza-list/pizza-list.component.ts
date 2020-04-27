import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  products:Product
  constructor(private store:StoreService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.store.fetchProducts()
    .subscribe((products:Product)=>{
      this.products = products;
    })
  }

}
