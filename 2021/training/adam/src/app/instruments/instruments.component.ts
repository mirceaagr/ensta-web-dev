import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../services/instruments.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {
  public instruments;
  constructor(private adamService:InstrumentsService) { }

  ngOnInit(): void {
    this.getInstruments();
  }

  async getInstruments() {
    // this.instrumentsService.getInstruments().subscribe( (instruments)=> {
    //   this.instruments = instruments;
    // })
    this.instruments = await this.adamService.getInstruments().toPromise();
  }

}
