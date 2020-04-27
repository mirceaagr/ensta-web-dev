import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Cart } from '../models/Cart';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  promoMessage:string = "";
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

  applyPromoCode(form){
    console.log(form); // {promo:value}
    if(isNullOrUndefined(form.promo)) {
      this.promoMessage = "Empty promo code";
      return;
    }
    if(this.store.cart.setPromo(form.promo)) {
      this.promoMessage = "Discount Applied"
    } else {
      this.promoMessage = "Wrong promo code"
    }
  }

  debug(form){
    console.log(form)
  }

}
