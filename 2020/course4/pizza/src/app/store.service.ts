import { Injectable } from '@angular/core';
import { CarouselItem } from './models/CarouselItem';
import { Product } from './models/Product';
import { Cart } from './models/Cart';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  carouselItems: CarouselItem[];
  products: Product[];
  cart: Cart;

  constructor() { 
    const persistentCart = JSON.parse(localStorage.getItem('cart'));
    console.log(persistentCart);

    if(!isNullOrUndefined(persistentCart) &&  !isNullOrUndefined(persistentCart._products)) {
      this.cart = new Cart(persistentCart._products);
    } else {
      this.cart = new Cart([]);
    }

    this.products = []

    this.carouselItems = []

  }

  getProduct(id:number):Product {
    const prod : Product = this.products.find((p:Product)=>{
        return p.id === id
    })
    return prod;
  }
}
