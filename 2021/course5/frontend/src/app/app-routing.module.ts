import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from './components/bills/bills.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"bills", component:BillsComponent},
  {path:"clients", component:ClientsComponent},
  {path:"settings", component:SettingsComponent},
  {path:"products", component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
