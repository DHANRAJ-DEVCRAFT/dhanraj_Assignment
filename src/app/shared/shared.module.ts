import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleChartModule } from './bubble-chart/bubble-chart.module';
import { DoughnutChartModule } from './doughnut-chart/doughnut-chart.module';
import { ColumnChartModule } from './column-chart/column-chart.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BubbleChartModule,
    DoughnutChartModule
  ],
  exports:[BubbleChartModule,DoughnutChartModule,ColumnChartModule]
})
export class SharedModule { }
