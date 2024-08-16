import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleChartComponent } from './bubble-chart.component';
import { ChartsModule } from "@rinminase/ng-charts";



@NgModule({
  declarations: [BubbleChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[BubbleChartComponent]
})
export class BubbleChartModule { }
