import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/store.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  id: number;
  pizza: Product;
  routeSub: Subscription

  constructor(
    private store: StoreService,
    private activatedRoute: ActivatedRoute // we use activated route to get the params in the url
    ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute
      .paramMap
      .subscribe((params) => { // we subscribe to the activated route observable
        console.log(params);
        this.id = parseInt(params.get("id"));
      })

    this.pizza = this.store.getProduct(this.id);  
  }

}
