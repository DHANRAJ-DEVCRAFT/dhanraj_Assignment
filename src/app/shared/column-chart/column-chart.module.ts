import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnChartComponent } from './column-chart.component';
import { ChartsModule } from "@rinminase/ng-charts";



@NgModule({
  declarations: [ColumnChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[ColumnChartComponent]
})
export class ColumnChartModule { }
