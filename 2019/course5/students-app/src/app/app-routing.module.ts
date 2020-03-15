import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'students', component: StudentsComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
