import { Component, OnInit, OnChanges, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Engine } from 'src/app/models/engine';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit, OnChanges {

  @Input() selectedCar: Car;
  car: Car = new Car();
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.car.engine = new Engine();
    this.car.engine.fuel = null;
    this.car.engine.consumption = 0;
    this.car.engine.power = 0;
  }

  ngOnChanges() {
    this.car = this.selectedCar;
  }

  debug( form ): void {
    console.log(form);
  }

  isAddAction(carId){
    return isNullOrUndefined(carId) || carId === 0
  }
  
  processForm(car: Car): void {
    console.log(car);
    if ( this.isAddAction( car.id ) ) {
      this.carService.addCar( car ).subscribe((car: Car) => {
        this.update.emit(true);
      });
    } else {
      this.carService.editCar( car ).subscribe((car: Car) => {
        this.update.emit(true);
      });
    }

  }

}
