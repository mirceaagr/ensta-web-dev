import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ensta billing';

  nav=[
    {link:"/", label:"Home"},
    {link:"bills", label:"Bills"},
    {link:"clients", label:"Clients"},
    {link:"products", label:"Products"},
    {link:"settings", label:"Settings"},
    {link:"login", label:"Login"},
  ]
}
