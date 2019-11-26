import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MultiLineChart, MultiLineChartLineInput, MultiLineChartPillar } from '../../models/multi-line-chart';

@Component({
  selector: 'lib-multi-line-chart',
  templateUrl: './multi-line-chart.component.html',
  styleUrls: ['./multi-line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineChartComponent {
  chart: MultiLineChart;

  @Input() set data(value: MultiLineChartLineInput[]) {
    this.chart = new MultiLineChart(value);
    console.log('MultiLineChartComponent', value, this.chart);
  }

  constructor(private sanitizer: DomSanitizer) { }

  segmentPath(pillar: MultiLineChartPillar) {
    const polygon = `polygon(0 ${100 - pillar.shapeStart}%, 100% ${100 - pillar.shapeEnd}%, 100% ${101 - pillar.shapeEnd}%, 0 ${101 - pillar.shapeStart}%)`;
    return this.sanitizer.bypassSecurityTrustStyle(polygon);
  }

  dotLocation(pillar: MultiLineChartPillar) {
    return this.sanitizer.bypassSecurityTrustStyle(`${pillar.shapeEnd}%`);
  }

}
