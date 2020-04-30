import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { IFooterLangSet, ILangSet } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  translation:IFooterLangSet = null;  //data translation needed for the navbar
  constructor(private lang:LangService) { }

  ngOnInit(): void {
      // we subscribe here to the changes in the lang service
    // you'll do this for all the components that listen for the translation stream
    this.lang.translation$.subscribe((t:ILangSet) => {
      this.translation= t.footer
    })
  }

}
