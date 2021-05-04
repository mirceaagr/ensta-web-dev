import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/components/products/product.model';
import { IBillItem } from '../../bill-item.model';

@Component({
  selector: 'app-bill-form-item',
  templateUrl: './bill-form-item.component.html',
  styleUrls: ['./bill-form-item.component.css']
})
export class BillFormItemComponent implements OnInit {
  @Input() fg: FormGroup
  @Input() index:number;
  @Input() products: IProduct[];
  @Output() onItemDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }

  public onDelete() {
    this.onItemDelete.emit(this.index);
  }

}
