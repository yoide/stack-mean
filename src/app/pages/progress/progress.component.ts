import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css',
  ]
})
export class ProgressComponent {

progress: number = 52;
progress1: number = 10;

  get getPorcentaje() {
    return `${this.progress}%`;
  }

  get getPorcentaje1() {
    return `${this.progress1}%`;
  }


  chageValue(valor: number){
    console.log('Heyyy !!!', valor);
  }
}
