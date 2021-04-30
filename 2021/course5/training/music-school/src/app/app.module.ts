import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { SidebarEventComponent } from './sidebar/sidebar-event/sidebar-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ClassesComponent,
    ContactComponent,
    Form1Component,
    Form2Component,
    SidebarEventComponent
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
