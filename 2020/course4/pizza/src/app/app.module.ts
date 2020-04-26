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
    PizzaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
