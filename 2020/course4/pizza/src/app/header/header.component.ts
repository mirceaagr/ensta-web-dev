import { Component, OnInit } from '@angular/core';
import { IMenuLangSet, AllowedLangs } from '../constants';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  translations: IMenuLangSet  = null;
  language:AllowedLangs = "en";
  constructor(private lang:LangService) { }

  ngOnInit(): void {
    this.language = this.lang.language;
    this.changeLang(this.language)
  }

  changeLang(language:AllowedLangs){
    this.language = language;
    this.lang.changeLang(language);
    this.translations = this.lang.translation.menu
  }

}
