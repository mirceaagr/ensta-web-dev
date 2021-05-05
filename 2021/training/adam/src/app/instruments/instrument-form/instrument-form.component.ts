import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Instrument } from '../instrument.interface';

@Component({
  selector: 'app-inst-form',
  templateUrl: './instrument-form.component.html',
  styleUrls: ['./instrument-form.component.css']
})
export class InstrumentFormComponent implements OnInit {
  @Output() onFormSubmit: EventEmitter<Instrument> = new EventEmitter<Instrument>();
  @Input() instrument:Instrument;
  @Input() operation:"add" | "edit" = "add";

  constructor() {
  }

  debugForm(form) {
    console.log(form)
  }

  formSubmit(form) {
    this.onFormSubmit.emit(form);
  }

  ngOnInit(): void {
    if(this.instrument == null) {
      this.instrument = {
        id:0,
        choordsNo:null,
        familly:null,
        name:"Adam"
      }
    }
  }

}
