import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnChanges {
  // this is an input
  @Input() percentage: number;
  @Input() someInput: string;

  message = "Your pizza is baking. Here's the progress of the pizza";
  constructor() { }

  ngOnInit(): void {
  }

  // this detects the CHANGES ON INPUTS
  ngOnChanges(changes : SimpleChanges) {
    if(!isNullOrUndefined(changes.percentage)) {
      if(changes.percentage.currentValue === 100) {
        this.message = "Heyyyyyy... your pizza is ready";
      }
    }

  }

}
