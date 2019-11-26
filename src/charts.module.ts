import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { MultiLineChartComponent } from './components/multi-line-chart/multi-line-chart.component';

@NgModule({
  declarations: [
    LineChartComponent,
    MultiLineChartComponent
  ],
  imports: [CommonModule],
  exports: [
    LineChartComponent,
    MultiLineChartComponent
  ]
})
export class ChartsModule {}
