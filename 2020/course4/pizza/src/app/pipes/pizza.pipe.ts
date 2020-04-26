import { Pipe, PipeTransform } from '@angular/core';
import { CartProduct } from '../models/CartProduct';

@Pipe({
  name: 'pizza'
})
export class PizzaPipe implements PipeTransform {

  transform(pizza: CartProduct, uppercaseTitle:true, showCurrency:true): string {

    let currency = showCurrency? "EUR" : "";
    let name = uppercaseTitle?pizza.name.toUpperCase():pizza.name;

    return `------->> ${name} * ${pizza.quantity}${currency} <<------`
  }

}
