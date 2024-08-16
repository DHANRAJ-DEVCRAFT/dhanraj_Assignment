import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  @Input()columnChart_data:any
  @Input()columnLabel?:any

  chartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  chartLabels = [];
  chartLegend = true;
  chartPlugins = [];

  chartData = [];

  constructor(){

  }

  ngOnInit(){
    debugger
    this.chartLabels =this.columnLabel
    this.chartData = this.columnChart_data
  }

}

