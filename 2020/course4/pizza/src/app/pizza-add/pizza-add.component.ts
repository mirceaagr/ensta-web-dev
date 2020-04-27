import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
  @Output() productUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private store:StoreService) { }

  ngOnInit(): void {
  }

  processForm(form) {
    if(form.invalid){
      alert("Baddddd")
      return;
    }

    this.store.postProduct(form.value).subscribe(p=>{
      // we need to notify the product list component to updated
      this.productUpdate.emit(true);
    },
    error=> {
      alert("Product could not be posted")
    }
    )


  }


}
