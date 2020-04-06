import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem } from '../models/CarouselItem';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() items:CarouselItem[]

  constructor() {
    

  }

  ngOnInit(): void {
  }

}
