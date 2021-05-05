import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrument } from '../instruments/instrument.interface';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private http:HttpClient) { }

  getInstruments():Observable<Instrument> {
    return this.http.get<Instrument>('http://localhost:3000/instruments')
  }

  getInstrument(id:number) {
    return this.http.get('http://localhost:3000/instruments/' + id)
  }

  createInstrument(instrument) {
    return this.http.post('http://localhost:3000/instruments', instrument);
  }

  updateInstrument(instrument) {
    return this.http.put('http://localhost:3000/instruments/' + instrument.id, instrument);
  }

  deleteInstrument(id:number) {
    return this.http.delete('http://localhost:3000/instruments/' + id);
  }
}
