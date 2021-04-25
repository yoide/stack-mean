import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

// FUnción javascript que se ejecuta de manera global en archivo asset/js/custom.js.
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
