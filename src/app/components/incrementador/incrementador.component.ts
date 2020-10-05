import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Output() progressEmitter: EventEmitter<number> = new EventEmitter();
  @Input() progressBar: number = 25;
  constructor() { }

    // tslint:disable-next-line: typedef
  changeValue(valor: number){
  if(this.progressBar >= 100 && valor > 0){
    this.progressEmitter.emit(100);
    return this.progressBar = 100;
  }

  if (this.progressBar <= 0 && valor < 0) {
      this.progressEmitter.emit(0);
      return this.progressBar = 0;
  }
  this.progressBar = this.progressBar + valor;
  this.progressEmitter.emit(this.progressBar);
    }

}
