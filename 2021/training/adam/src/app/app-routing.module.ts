import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentAddComponent } from './instruments/instrument-add/instrument-add.component';
import { InstrumentEditComponent } from './instruments/instrument-edit/instrument-edit.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PlayersComponent } from './players/players.component';


const routes: Routes = [
  {path:"", component: InstrumentsComponent},
  {path:"instruments", component: InstrumentsComponent},
  {path:"instruments/add", component: InstrumentAddComponent},
  {path:"instruments/edit/:id", component: InstrumentEditComponent},
  {path:"players", component: PlayersComponent},
  {path: '**', component: NotfoundComponent},
  //{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
