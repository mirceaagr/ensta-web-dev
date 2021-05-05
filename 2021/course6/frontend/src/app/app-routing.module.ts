import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from './components/bills/bills.component';
import { ClientAddComponent } from './components/clients/client-add/client-add.component';
import { ClientEditComponent } from './components/clients/client-edit/client-edit.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"bills", component:BillsComponent},
  {path:"clients", component:ClientsComponent},
  {path:"clients/add", component:ClientAddComponent},
  {path:"clients/edit/:id", component:ClientEditComponent},
  {path:"settings", component:SettingsComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/add", component:ProductAddComponent},
  {path:"products/edit/:id", component:ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
