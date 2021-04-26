import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() percent:number;
  @Input() barType:"success" | "info" | "danger" | "warning" | "";

  constructor() { }

  ngOnInit(): void {
  }

}
