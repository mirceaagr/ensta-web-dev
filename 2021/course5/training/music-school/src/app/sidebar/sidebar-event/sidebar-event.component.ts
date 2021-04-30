import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-event',
  templateUrl: './sidebar-event.component.html',
  styleUrls: ['./sidebar-event.component.css']
})
export class SidebarEventComponent implements OnInit {
  @Input() eventName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
