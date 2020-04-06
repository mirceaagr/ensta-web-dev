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
        id:0,
        description: "Pizza margueritate",
        image:"https://picsum.photos/id/237/600/400",
        name: "First Product",
        price: 10
      },
      {
        id:0,
        description: "Pizza hawayan",
        image:"https://picsum.photos/id/265/600/400",
        name: "First Product",
        price: 10
      },
      {
        id:0,
        description: "Pizza pesci",
        image:"https://picsum.photos/id/254/600/400",
        name: "First Product",
        price: 10
      },
      {
        id:0,
        description: "Pizza prosciutto",
        image:"https://picsum.photos/id/234/600/400",
        name: "First Product",
        price: 10
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
}
