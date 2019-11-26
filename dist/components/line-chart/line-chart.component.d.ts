import { LineCartPillar, LineChart, LineChartPoint } from '../../models/line-chart';
import { DomSanitizer } from '@angular/platform-browser';
export declare class LineChartComponent {
    private sanitizer;
    chart: LineChart;
    points: LineChartPoint<Date | number | string>[];
    constructor(sanitizer: DomSanitizer);
    shape(pillar: LineCartPillar): import("@angular/platform-browser").SafeStyle;
    line(pillar: LineCartPillar): import("@angular/platform-browser").SafeStyle;
}
