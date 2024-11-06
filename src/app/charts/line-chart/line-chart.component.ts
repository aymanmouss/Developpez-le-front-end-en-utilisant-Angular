import { Component, Input } from '@angular/core';
import { LineChartData } from 'src/app/core/models/DetailsData';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  @Input() view: [number, number] = [0, 0];
  @Input() data: LineChartData[] = [];
  @Input() showLegend: boolean = false;
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() showYAxisLabel: boolean = true;
  @Input() xAxisLabel: string = 'Dates';
}
