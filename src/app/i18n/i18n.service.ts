import { Injectable } from '@angular/core';
import i18next from 'i18next';

import en from './resources/en.json'
import de from './resources/de.json'

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  constructor() {
    i18next.init({
      lng: 'en',
      debug: true,
      resources: {
        en,
        de,
      }
    });
  }

  public translate(key: string): string {
    return i18next.t(key);
  }

  public exists(key: string) {
    return i18next.exists(key);
  }

  public changeLanguage(lng: string = 'en') {
    i18next.changeLanguage(lng);
  }
}
