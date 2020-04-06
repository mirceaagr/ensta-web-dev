import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../models/CarouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items:CarouselItem[]

  constructor() {
    this.items = [
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
      {
        id:3,
        caption:"My fourth caption",
        title: "My fourth title",
        url: "https://picsum.photos/id/240/1200/400",
      },
      {
        id:4,
        caption:"My fifth caption",
        title: "My fight title",
        url: "https://picsum.photos/id/241/1200/400"
      },
      {
        id:5,
        caption:"My fifth caption",
        title: "My fight title",
        url: "https://picsum.photos/id/251/1200/400"
      },

    ]

   }

  ngOnInit(): void {
  }

}
