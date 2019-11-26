export declare enum MultiLineChartLineType {
    normal = "normal",
    dashed = "dashed",
    points = "points"
}
export declare enum MultiLineChartValueType {
    numbers = "numbers",
    percents = "percents"
}
export interface MultiLineChartLineData {
    label: string;
    lineType: MultiLineChartLineType;
    valueType: MultiLineChartValueType;
}
export interface MultiLineChartPillar {
    shapeStart: number;
    shapeEnd: number;
    x: number;
    y: number;
}
export interface MultiLineChartLineInput extends MultiLineChartLineData {
    items: {
        x: number;
        y: number;
    }[];
}
export interface MultiLineChartLineOutput extends MultiLineChartLineData {
    items: MultiLineChartPillar[];
}
export declare class MultiLineChart {
    maxValue: number;
    scaleY: [number, number, number];
    scaleX: number[];
    lines: MultiLineChartLineOutput[];
    constructor(data: MultiLineChartLineInput[]);
}
export declare function prepareShapes(items: {
    x: number;
    y: number;
}[], maxValue: number, percents: boolean): MultiLineChartPillar[];
