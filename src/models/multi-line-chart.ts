import { axisYScale, max, order } from '../helpers';

export enum MultiLineChartLineType {
  normal = 'normal',
  dashed = 'dashed',
  points = 'points'
}

export enum MultiLineChartValueType {
  numbers = 'numbers',
  percents = 'percents'
}

export interface MultiLineChartLineData {
  label: string;
  lineType: MultiLineChartLineType;
  valueType: MultiLineChartValueType;
}

export interface MultiLineChartPillar {
  shapeStart: number; // Percents
  shapeEnd: number; // Percents
  x: number;
  y: number;
}

export interface MultiLineChartLineInput extends MultiLineChartLineData {
  items: {
    x: number;
    y: number;
  }[]
}

export interface MultiLineChartLineOutput extends MultiLineChartLineData {
  items: MultiLineChartPillar[];
}

export class MultiLineChart {
  maxValue: number;
  scaleY: [number, number, number];
  scaleX: number[];
  lines: MultiLineChartLineOutput[] = [];

  constructor(data: MultiLineChartLineInput[]) {
    if (data && data.length > 0) {
      const valueTyped = data.filter(line => line.valueType === MultiLineChartValueType.numbers);
      if (!valueTyped.length) {
        throw Error('You must provide at least one number type line');
      }
      const maxItems = valueTyped.map(line => max(line.items, 'y'));
      const scale = axisYScale(max(maxItems, 'y').y);
      this.maxValue = scale.maxValue;
      this.scaleY = scale.scaleY;
      this.scaleX = data[0].items.map(i => i.x);
      this.lines = data.map(line => ({
        label: line.label,
        lineType: line.lineType,
        valueType: line.valueType,
        items: prepareShapes(line.items, this.maxValue, line.valueType === MultiLineChartValueType.percents)
      }));
    }
  }
}

export function prepareShapes(items: { x: number, y: number }[], maxValue: number, percents: boolean): MultiLineChartPillar[] {
  return order(items, 'x')
    .map((point, index, array) => {
      if (index === 0) { return; }
      return {
        x: point.x,
        y: point.y,
        shapeStart: percents ? array[index - 1].y : Math.floor(array[index - 1].y / maxValue * 100),
        shapeEnd: percents ? point.y : Math.floor(point.y / maxValue * 100),
      };
    })
    .slice(1);
}

