import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from 'src/app/services/instruments.service';
import { Instrument } from '../instrument.interface';

@Component({
  selector: 'app-instrument-add',
  templateUrl: './instrument-add.component.html',
  styleUrls: ['./instrument-add.component.css']
})
export class InstrumentAddComponent implements OnInit {
  public submitted = false;
  constructor(private instrumentsService:InstrumentsService) { }

  ngOnInit(): void {
  }

  addInstrument(instrument:Instrument) {
    this.instrumentsService.createInstrument(instrument)
      .subscribe(() => {
        this.submitted = true;
      });
  }

}
