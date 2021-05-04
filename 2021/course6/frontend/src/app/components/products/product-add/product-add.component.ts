import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  submitted = false;
  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }

  addProduct(product) {
    this.restService.addProduct(product)
      .subscribe((p) => {
        // show success message
        this.submitted = true;
      }),
      error => {
        // do something to show err message
      }
  }

}
