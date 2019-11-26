import { DomSanitizer } from '@angular/platform-browser';
import { MultiLineChart, MultiLineChartLineInput, MultiLineChartPillar } from '../../models/multi-line-chart';
export declare class MultiLineChartComponent {
    private sanitizer;
    chart: MultiLineChart;
    data: MultiLineChartLineInput[];
    constructor(sanitizer: DomSanitizer);
    segmentPath(pillar: MultiLineChartPillar): import("@angular/platform-browser").SafeStyle;
    dotLocation(pillar: MultiLineChartPillar): import("@angular/platform-browser").SafeStyle;
}
