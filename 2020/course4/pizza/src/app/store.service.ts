import { Injectable } from '@angular/core';
import { CarouselItem } from './models/CarouselItem';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  carouselItems: CarouselItem[];
  products: Product[];

  constructor() { 

    this.products = [
      {
        id:1,
        description: "Pizza margueritate",
        image:"https://picsum.photos/id/237/600/400",
        name: "First Product",
        price: 10
      },
      {
        id:2,
        description: "Pizza hawayan",
        image:"https://picsum.photos/id/265/600/400",
        name: "Second Product",
        price: 11
      },
      {
        id:3,
        description: "Pizza pesci",
        image:"https://picsum.photos/id/254/600/400",
        name: "Third Product",
        price: 12
      },
      {
        id:4,
        description: "Pizza prosciutto",
        image:"https://picsum.photos/id/234/600/400",
        name: "Fourth Product",
        price: 13
      }

    ];

    this.carouselItems = [
      {
        id:0,
        caption:"My first caption",
        title: "My first title",
        url: "https://picsum.photos/id/237/1200/400"
      },
      {
        id:1,
        caption:"My second caption",
        title: "My second title",
        url: "https://picsum.photos/id/238/1200/400"
      },
      {
        id:2,
        caption:"My third caption",
        title: "My third title",
        url: "https://picsum.photos/id/239/1200/400"
      },
    ]

  }

  getProduct(id:number):Product {
    const prod : Product = this.products.find((p:Product)=>{
        return p.id === id
    })
    return prod;
  }
}
