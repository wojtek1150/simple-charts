import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LineCartPillar, LineChart, LineChartPoint } from '../../models/line-chart';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent {
  chart: LineChart;

  @Input() set points(value: LineChartPoint<Date | number | string>[]) {
    this.chart = new LineChart(value);
  }

  constructor(private sanitizer: DomSanitizer) { }

  shape(pillar: LineCartPillar) {
    const polygon = `polygon(0 ${100 - pillar.startValue}%, 100% ${100 - pillar.endValue}%, 100% 100%, 0% 100%)`;
    return this.sanitizer.bypassSecurityTrustStyle(polygon);
  }

  line(pillar: LineCartPillar) {
    const polygon = `polygon(0 ${100 - pillar.startValue}%, 100% ${100 - pillar.endValue}%, 100% ${102 - pillar.endValue}%, 0 ${102 - pillar.startValue}%)`;
    return this.sanitizer.bypassSecurityTrustStyle(polygon);
  }

}
