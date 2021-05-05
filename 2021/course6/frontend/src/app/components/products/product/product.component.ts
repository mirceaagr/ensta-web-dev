import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:IProduct
  @Output() whenMirceaDeletesStuff:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct() {
    console.log("bla");
    this.whenMirceaDeletesStuff.emit(this.product.id);
  }

}
