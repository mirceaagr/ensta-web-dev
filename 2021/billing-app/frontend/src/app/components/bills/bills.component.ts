import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { IProduct } from '../products/product.model';
import { IBill } from './bill.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  public bills:IBill[] = null;
  public loading = false;
  public error = null;
  
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getBills();
  }

  private getBills(){
    this.loading = true;
    this.error = null;
    this.rest.getBillsWithClients()
      .subscribe( (bills) => {
        this.bills = bills;
      },
      err => this.error = err.message,
      () => this.loading = false
      )
   
  }

}
