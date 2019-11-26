import { daysDiff, order } from '../helpers';

export interface LineChartPoint<T> {
  value: number;
  time: T;
}

export interface LineCartPillar {
  startValue: number; // xScale - point[-1].value * 100%
  endValue: number; // xScale - point[0].value * 100%
  startPosition: number; // (days - point[-1].start)
  endPosition: number; // (days - point[0].start)
  width: number; // (end - start) / days * 100%
}

export class LineChart {
  points: LineChartPoint<Date>[] = [];
  pillars: LineCartPillar[] = [];
  xScale: number; // Max point value + 10%
  days: number; // no of days between fist and last point
  startPoint: Date; // Newest point
  endPoint: Date; // Newest point

  constructor(items: LineChartPoint<Date | number | string>[]) {
    if (items && items.length > 0) {
      this.points = order(items.map(i => ({ value: i.value, time: new Date(i.time) })), 'time');
      this.xScale = this.points.reduce((a, b) => a.value >= b.value ? a : b, { value: 0 }).value * 1.1;
      this.startPoint = this.points.slice(0, 1)[0].time;
      this.endPoint = this.points.slice(-1)[0].time;
      this.days = daysDiff(this.startPoint, this.endPoint);
      this.pillars = this.points.map((point, index, array) => {
        if (index === 0) { // first should be skipped. then all next end is current, start is previous, so don't make calc for fist
          return {} as LineCartPillar;
        }
        const item = {
          startValue: Math.floor(array[index - 1].value / this.xScale * 100),
          endValue: Math.floor(point.value / this.xScale * 100),
          startPosition: daysDiff(this.startPoint, array[index - 1].time),
          endPosition: daysDiff(this.startPoint, point.time)
        };
        return {
          ...item,
          width: Math.floor((item.endPosition - item.startPosition) / this.days * 100)
        };
      }).slice(1);
    }
  }
}
