import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  view: [number, number] = [700, 400]; // Width and height of the chart
  data = [
    {
      name: 'Germany',
      value: 40632,
    },
    {
      name: 'United States',
      value: 49737,
    },
    {
      name: 'France',
      value: 36745,
    },
    {
      name: 'United Kingdom',
      value: 36240,
    },
    {
      name: 'Spain',
      value: 33000,
    },
    {
      name: 'Italy',
      value: 35800,
    },
  ];

  // Options for the chart
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
}
