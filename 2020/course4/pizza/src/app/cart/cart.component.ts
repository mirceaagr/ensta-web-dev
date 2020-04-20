import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  constructor(public store: StoreService) { }

  ngOnInit(): void {
    this.cart = this.store.cart
  }

  incQuant(index){
    this.store.cart.increment(index);
  }

  decQuant(index){
    this.store.cart.decrement(index);
  }

  delFromCart(index){
    this.store.cart.deleteFromCart(index);
  }

}
