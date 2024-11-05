import { Component, Input } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  @Input() view: [number, number] = [0, 0]; // Default dimensions
  @Input() data: { name: string; value: number }[] = [];
  @Input() showLegend: boolean = false;
  @Input() showLabels: boolean = false;
  @Input() isDoughnut: boolean = false;
  @Input() legendPosition: LegendPosition = LegendPosition.Right;
  @Input() onSelect: (event: { name: string }) => void = () => {};
}
