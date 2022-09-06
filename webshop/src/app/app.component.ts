import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop';

  constructor(private translate: TranslateService) {
    let language = "ee";
    const languageLS = localStorage.getItem("language");
    if (languageLS !== null) {
      language = languageLS;
    }
    translate.setDefaultLang(language);
    translate.use(language);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language)
}
}
