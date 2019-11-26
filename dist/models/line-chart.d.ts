export interface LineChartPoint<T> {
    value: number;
    time: T;
}
export interface LineCartPillar {
    startValue: number;
    endValue: number;
    startPosition: number;
    endPosition: number;
    width: number;
}
export declare class LineChart {
    points: LineChartPoint<Date>[];
    pillars: LineCartPillar[];
    xScale: number;
    days: number;
    startPoint: Date;
    endPoint: Date;
    constructor(items: LineChartPoint<Date | number | string>[]);
}
