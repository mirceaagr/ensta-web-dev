import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import cars from '../cars/car-list';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[];
  constructor(private http: HttpClient) {
    this.cars = cars;

  }

  getCars() {
    return this.cars;
  }

  addCar(car: Car): Observable<any> {
    console.log('Submited', car);
    this.cars.push(car);
    return  this.http.post('http://localhost:3000/cars', car);
  }

  deleteCar() {

  }

  editCar() {

  }
}
