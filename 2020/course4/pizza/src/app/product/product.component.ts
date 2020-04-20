import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  constructor(private store:StoreService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.store.cart.addToCart(this.product);
  }
  

}
