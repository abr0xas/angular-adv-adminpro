import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string | undefined
  @Input('labels') doughnutChartLabels: string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 200, 200 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
