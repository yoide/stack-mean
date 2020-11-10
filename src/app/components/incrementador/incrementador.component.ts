import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Output() progressEmitter: EventEmitter<number> = new EventEmitter();
  @Input() progressBar = 25;
  @Input() btnClass = 'btn-primary';
  formProgress: FormControl;
  constructor() { }


  ngOnInit(): void {
    this.formProgress = new FormControl(this.progressBar, []);
    this.btnClass = `btn ${this.btnClass}`;
    this.formProgress.valueChanges.subscribe(data => {
      if (this.progressBar >= 100 && data > 0) {
        return this.progressBar = 100;
      }

      else if (this.progressBar <= 0 && data < 0) {
        return this.progressBar = 0;
      }
      this.progressBar = this.progressBar + data;
      this.progressEmitter.emit(this.progressBar);
    });
  }

  // tslint:disable-next-line: typedef
  changeValue(valor: number) {
    if (this.progressBar >= 100 && valor > 0) {
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
/*
  public onChange(newValue: number) {
    if (this.progressBar >= 100 && newValue > 0) {
      return this.progressBar = 100;
    }

    else if (this.progressBar <= 0 && newValue < 0) {
      return this.progressBar = 0;
    }
    this.progressBar = this.progressBar + newValue;
    this.progressEmitter.emit(this.progressBar);
  } */

}
