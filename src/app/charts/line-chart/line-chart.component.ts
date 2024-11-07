import { Component, HostListener, Input } from '@angular/core';
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

  /**
   * Initializes the component by setting the initial chart size.
   */
  ngOnInit() {
    this.updateChartSize();
  }

  /**
   * Listens for window resize events to keep the chart responsive.
   * Calls updateChartSize to adjust the chart dimensions based on the new window size.
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateChartSize();
  }

  /**
   * Calculates and updates the chart size based on the current window dimensions.
   */
  private updateChartSize() {
    const maxWidth = 700; // Maximum chart width
    const maxHeight = 400; // Maximum chart height

    // Calculate width based on 90% of the window's width or the maxWidth, whichever is smaller
    const width = Math.min(window.innerWidth * 0.9, maxWidth);

    const aspectRatio = 3 / 4; // Aspect ratio for width to height
    // Calculate height based on width and aspect ratio, but do not exceed maxHeight
    const height = Math.min(width * aspectRatio, maxHeight);

    // Update the chart's view dimensions
    this.view = [width, height];
  }
}
