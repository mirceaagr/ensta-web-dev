import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from '../events-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public events:string[] = null

  constructor(private eventsService:EventsServiceService) { }

  ngOnInit(): void {
    this.eventsService.getEvents()
      .subscribe((events) => {this.events = events})
  }

}
