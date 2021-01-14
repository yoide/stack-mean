import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;
  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    console.log(this.links);

    this.changeCurrentTheme();
  }

  public changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.changeCurrentTheme();
  }

  public changeCurrentTheme() {
    this.links.forEach(element => {
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
