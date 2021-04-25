import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');
  constructor() {
    const storage = localStorage.getItem('theme') || '/assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', storage);
  }

  public changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.changeCurrentTheme();
  }

  public changeCurrentTheme() {
    debugger
    const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
