import { Injectable } from '@angular/core';
import { AllowedLangs, ILangSet, LANGS } from './constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language: AllowedLangs = "en";
  private _langs:ILangSet = LANGS[this.language];
    // translation$ is an observable.. when you want to trigger an update in your components you call translation$.next(new val here)
  // in RxJS you can have Subject, BehaviourSubject and ReplaySubject
  translation$:BehaviorSubject<ILangSet> = new BehaviorSubject<ILangSet>(this._langs);
  get translation():ILangSet{
    return this._langs;
  }

  constructor() {
    this.language = localStorage.getItem('language') as AllowedLangs || "en";
    this.changeLang(this.language);

  }

  changeLang(language: AllowedLangs) {
    this.language = language;
    localStorage.setItem('language', language);
    this._langs = LANGS[this.language];
    this.translation$.next(this.translation); // we emit a new value in the stream
  }
}
