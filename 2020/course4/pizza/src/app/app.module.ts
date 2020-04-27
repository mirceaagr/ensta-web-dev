import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressComponent } from './progress/progress.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { CartComponent } from './cart/cart.component';
import { SmallCartComponent } from './cart/small-cart/small-cart.component';
import { PizzaPipe } from './pipes/pizza.pipe';
import { LoginComponent } from './login/login.component';
import {FormsModule } from '@angular/forms';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PizzasComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    ProgressComponent,
    CarouselComponent,
    ProductComponent,
    PizzaDetailComponent,
    CartComponent,
    SmallCartComponent,
    PizzaPipe,
    LoginComponent,
    PizzaListComponent,
    PizzaAddComponent
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
