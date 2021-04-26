import { Injectable } from '@angular/core';
import { IProduct } from '../components/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public testVar = "dadadasdasd"
  public products:IProduct[] = [
    {
      description:"test description",
      id:1,
      name:"test product",
      picture:"https://picsum.photos/100/100?random=2",
      price: 10
    },
    {
      description:"test 2 description",
      id:2,
      name:"tesadsadasdat product",
      picture:"https://picsum.photos/100/100?random=2",
      price: 10
    }
  ];
  constructor() { }
}
