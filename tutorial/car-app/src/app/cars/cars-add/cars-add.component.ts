import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  debug( form ): void {
    console.log(form);
  }

  processForm(car: Car): void {
    this.carService.addCar(car).subscribe( (car: Car) => {
      alert('Car has been submited');
    });
  }

}
