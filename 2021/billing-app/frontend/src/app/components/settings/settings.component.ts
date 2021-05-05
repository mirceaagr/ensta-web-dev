import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public settings;
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.rest.getSettings()
      .subscribe(
        (settings) => {
          this.settings = settings
        },
        err => {
          console.log("Error")
        }

      )
  }

}
