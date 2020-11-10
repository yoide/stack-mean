import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input() labels: Label[] ;
  @Input() data: MultiDataSet[] ;
  @Input() title: string;

  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet[];
  public colors: Color[] = [
  {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = this.data;
  }

}
