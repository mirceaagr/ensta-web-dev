import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:IProduct;
  @Output() onProductDelete:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.onProductDelete.emit(this.product.id);
  }

}
