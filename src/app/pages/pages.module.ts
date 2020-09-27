import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './shared/share.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent
  ],
  exports: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ]
})
export class PagesModule { }
