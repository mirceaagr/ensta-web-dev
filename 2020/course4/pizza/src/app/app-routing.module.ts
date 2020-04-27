import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { ContactComponent } from './contact/contact.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { LoginComponent } from './login/login.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

//{path:... , component: nameofcomponents}
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"pizzas", component: PizzasComponent},
  {path:"pizza/:id", component: PizzaDetailComponent},
  {path:"contact", component: ContactComponent},
  {path:"login", component: LoginComponent},
  {path:"pizza-list", component: PizzaListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
