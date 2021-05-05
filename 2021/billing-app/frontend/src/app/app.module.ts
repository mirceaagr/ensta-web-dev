import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BillsComponent } from './components/bills/bills.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ProductComponent } from './components/products/product/product.component';
import { HttpClientModule} from '@angular/common/http';
import { ClientAddComponent } from './components/clients/client-add/client-add.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { BillsAddComponent } from './components/bills/bills-add/bills-add.component';
import { BillsFormComponent } from './components/bills/bills-form/bills-form.component';
import { BillFormItemComponent } from './components/bills/bills-form/bill-form-item/bill-form-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BillEditComponent } from './components/bills/bill-edit/bill-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BillsComponent,
    ClientsComponent,
    ProductsComponent,
    SettingsComponent,
    DashboardComponent,
    ProgressComponent,
    ProductComponent,
    ClientAddComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductEditComponent,
    BillsAddComponent,
    BillsFormComponent,
    BillFormItemComponent,
    SpinnerComponent,
    BillEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
