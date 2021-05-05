import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { IBill } from '../bill.model';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.css']
})
export class BillEditComponent implements OnInit {
  public bill:IBill = null;
  public billId:number = null;

  constructor(
    private restService:RestService,
    private route:ActivatedRoute
    ) { }

  async ngOnInit() {
    await this.getBill()
  }

  async getBill() {
    this.billId = this.route.snapshot.params.id;
    this.bill = await this.restService.getBill(this.billId).toPromise(); // handle error handling end loading spinner
  }

}
