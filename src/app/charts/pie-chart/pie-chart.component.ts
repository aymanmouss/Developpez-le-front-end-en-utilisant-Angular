import { Component, HostListener, Input } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  // Use @Input properties to make the component reusable with customizable options
  @Input() view: [number, number] = [700, 400]; // Default dimensions
  @Input() data: { name: string; value: number }[] = []; // Data for the chart
  @Input() showLegend: boolean = false;
  @Input() showLabels: boolean = false;
  @Input() isDoughnut: boolean = false;
  // Position of the legend (e.g., Right, Left, Top, Bottom)
  @Input() legendPosition: LegendPosition = LegendPosition.Right;
  // Event handler for when a chart segment is selected
  @Input() onSelect: (event: { name: string }) => void = () => {};

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
