import { Injectable } from '@angular/core';
import { CarouselItem } from './models/CarouselItem';
import { Product } from './models/Product';
import { Cart } from './models/Cart';
import { isNullOrUndefined } from 'util';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  carouselItems: CarouselItem[];
  products: Product[];
  cart: Cart;

  constructor(private http:HttpClient) { 
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

  getProduct(id:number):Observable<any> {
    // const prod : Product = this.products.find((p:Product)=>{
    //     return p.id === id
    // })

    return this.http.get(`${SERVER_URL}products?id=${id}`);
  }

  fetchProducts(): Observable<any> {
    return this.http.get(`${SERVER_URL}products`)
  }

  fetchCarousels(): Observable<any> {
    return this.http.get(`${SERVER_URL}carousels`)
  }
}
