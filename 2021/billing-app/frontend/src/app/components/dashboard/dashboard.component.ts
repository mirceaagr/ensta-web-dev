import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public crazy = 0;
  public barType = "";
  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.crazy++;
      if(this.crazy === 100) {
        clearInterval(interval);
      }

      if(this.crazy % 2 == 0) {
        this.barType = "info"
      }

      if(this.crazy % 3 == 0) {
        this.barType = "danger"
      }

      if(this.crazy % 5 == 0) {
        this.barType = "warning"
      }
    }, 100)
  }

}
