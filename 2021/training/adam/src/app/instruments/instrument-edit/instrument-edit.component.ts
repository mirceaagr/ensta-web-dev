import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentsService } from 'src/app/services/instruments.service';
import { Instrument } from '../instrument.interface';

@Component({
  selector: 'app-instrument-edit',
  templateUrl: './instrument-edit.component.html',
  styleUrls: ['./instrument-edit.component.css']
})
export class InstrumentEditComponent implements OnInit {
  public instrument:Instrument;
  constructor(
    private instrumentsService:InstrumentsService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getInstrument();
  }

  getInstrument() {
    const instrumentId = this.route.snapshot.params.id;
    this.instrumentsService.getInstrument(instrumentId)
      .subscribe((inst:Instrument) => {
        this.instrument = inst;
      })
  }

  editInstrument(instrument:Instrument) {
    instrument.id = this.instrument.id
    this.instrumentsService.updateInstrument(instrument).subscribe();
  }

}
