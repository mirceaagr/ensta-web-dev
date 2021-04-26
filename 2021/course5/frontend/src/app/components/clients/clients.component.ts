import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients;
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.rest.getClients()
      .subscribe(
        (cls) => {
          this.clients = cls
        }
      )
  }

}
