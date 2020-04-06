import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test = "This comes from a variable";
  pizzaPercentage = 0;  
  constructor() {
    setTimeout( () => {
      this.test = "This value changed"
    }, 2000)

    setTimeout( () => {
      this.test = "This value changed again"
    }, 4000)

    let interval = setInterval(()=>{
      this.pizzaPercentage++;
      if(this.pizzaPercentage === 100) {
        clearInterval(interval);
      }
    }, 100)
  }

  ngOnInit(): void {
    

  }

}
