import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {
  @Input() concertName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
