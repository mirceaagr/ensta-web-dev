import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class MybuttonComponent implements OnInit {
  @Input() personName = "Mircea";
  @Output() increment: EventEmitter<any> = new EventEmitter();
  title = "Monseur";
  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.increment.emit("clicked");
  }

}
