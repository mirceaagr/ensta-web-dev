import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message:string;
  @Input() alertType: "danger" | "warning" | "info";
  @Input() icon: string = "fa-exclamation-circle";

  constructor() {

  }

  ngOnInit(): void {
  }

}
