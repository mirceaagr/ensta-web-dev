import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnDestroy, OnChanges {
  @Input() percent:number;
  @Input() barType:"success" | "info" | "danger" | "warning" | "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Component changed", changes);
  }
  ngOnDestroy(): void {
    console.log("Component destroyed")
  }

  ngOnInit(): void {
    console.log("Component inited");
  }

}
