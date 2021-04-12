import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h2>From the component</h2>',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  persons:string[] = ["Adam", "Gabriel", "Nicolas", "Camille", "Marin"];
  isRaining = true;
  counter = 0;
  constructor() {
    setInterval(()=>{
      this.isRaining = !this.isRaining;
    }, 500)
  }

  increment() {
    this.counter ++;
  }
}
