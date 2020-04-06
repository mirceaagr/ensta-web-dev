import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { CarouselItem } from '../models/CarouselItem';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test = "This comes from a variable";
  pizzaPercentage = 0;  
  carouselItems: CarouselItem[];
  pizzas:Product[];

  // we use DI to inject Store Service
  constructor(private store:StoreService) {

    this.pizzas = store.products;
    this.carouselItems = store.carouselItems;
    setTimeout( () => {
      this.test = "This value changed"
    }, 2000)

    setTimeout( () => {
      this.test = "This value changed again"
    }, 4000)

    let interval = setInterval(()=>{
      this.pizzaPercentage++;
      if(this.pizzaPercentage === 100) {
        clearInterval(interval);
      }
    }, 100)
  }

  ngOnInit(): void {
    

  }

}
