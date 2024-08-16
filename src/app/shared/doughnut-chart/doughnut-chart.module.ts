import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent } from './doughnut-chart.component';
import { ChartsModule } from "@rinminase/ng-charts";



@NgModule({
  declarations: [DoughnutChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[DoughnutChartComponent]
})
export class DoughnutChartModule { }
