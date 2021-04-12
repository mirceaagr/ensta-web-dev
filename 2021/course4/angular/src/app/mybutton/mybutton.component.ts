import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class MybuttonComponent implements OnInit {
  @Input() personName = "Mircea";
  @Output() increment: EventEmitter = new EventEmitter();
  title = "Monseur";
  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.increment.emit("clicked");
  }

}
