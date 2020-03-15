import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  cars: Car[];
  totalValue = 0;
  oldestCar: Car = null ;
  mostUsedCar: Car = null;
  mostExpensive: Car = null;
  mostFuelEfficient: Car = null;
  constructor(private carService: CarService) {

  }

  calculateTotalValue() {

    for (const car of this.cars) {
      this.totalValue += car.price;

      if ( isNullOrUndefined(this.oldestCar) || car.year < this.oldestCar.year ) {
        this.oldestCar = car;
      }

      if ( isNullOrUndefined(this.mostUsedCar) || car.km > this.mostUsedCar.km ) {
        this.mostUsedCar = car;
      }

      if ( isNullOrUndefined(this.mostFuelEfficient) || car.engine.consumption < this.mostFuelEfficient.engine.consumption ){
        this.mostFuelEfficient = car;
      }

      if ( isNullOrUndefined(this.mostExpensive) || car.price > this.mostExpensive.price ) {
        this.mostExpensive = car;
      }
    }

  }

  ngOnInit() {
    this.carService.getCars().subscribe( (cars: Car[] ) => {
      this.cars = cars;
      this.calculateTotalValue();
    },
    error => alert('Could not retrieve cars')
    );
  }



}
