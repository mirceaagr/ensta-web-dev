import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { PlayersComponent } from './players/players.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InstrumentAddComponent } from './instruments/instrument-add/instrument-add.component';
import { InstrumentEditComponent } from './instruments/instrument-edit/instrument-edit.component';
import { InstrumentFormComponent } from './instruments/instrument-form/instrument-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    PlayersComponent,
    NotfoundComponent,
    InstrumentAddComponent,
    InstrumentEditComponent,
    InstrumentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
