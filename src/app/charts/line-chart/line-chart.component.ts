import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  @Input() view: [number, number] = [0, 0];
  @Input() data: { name: Date; value: number }[] = [];
  @Input() showLegend: boolean = false;
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() showYAxisLabel: boolean = true;
  @Input() xAxisLabel: string = 'Dates';
}
