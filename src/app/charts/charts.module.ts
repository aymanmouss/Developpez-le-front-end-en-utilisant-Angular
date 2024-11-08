import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [PieChartComponent, LineChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [PieChartComponent, LineChartComponent],
})
export class ChartsModule {}
