import { Component } from '@angular/core';
import { chartLabels, COLUMNDATA } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment_2024';
  columnChart_data:any[]=COLUMNDATA
  columnLabel = chartLabels

}
