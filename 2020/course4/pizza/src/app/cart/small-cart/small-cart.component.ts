import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css']
})
export class SmallCartComponent implements OnInit {
  public cart;
  constructor(private store:StoreService) { 
    this.cart = store.cart;
  }

  ngOnInit(): void {
  }

}
