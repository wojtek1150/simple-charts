/**
 * @fileoverview added by tsickle
 * Generated from: models/line-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { daysDiff, order } from '../helpers';
/**
 * @record
 * @template T
 */
export function LineChartPoint() { }
if (false) {
    /** @type {?} */
    LineChartPoint.prototype.value;
    /** @type {?} */
    LineChartPoint.prototype.time;
}
/**
 * @record
 */
export function LineCartPillar() { }
if (false) {
    /** @type {?} */
    LineCartPillar.prototype.startValue;
    /** @type {?} */
    LineCartPillar.prototype.endValue;
    /** @type {?} */
    LineCartPillar.prototype.startPosition;
    /** @type {?} */
    LineCartPillar.prototype.endPosition;
    /** @type {?} */
    LineCartPillar.prototype.width;
}
export class LineChart {
    // Newest point
    /**
     * @param {?} items
     */
    constructor(items) {
        this.points = [];
        this.pillars = [];
        if (items && items.length > 0) {
            this.points = order(items.map((/**
             * @param {?} i
             * @return {?}
             */
            i => ({ value: i.value, time: new Date(i.time) }))), 'time');
            this.xScale = this.points.reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.value >= b.value ? a : b), { value: 0 }).value * 1.1;
            this.startPoint = this.points.slice(0, 1)[0].time;
            this.endPoint = this.points.slice(-1)[0].time;
            this.days = daysDiff(this.startPoint, this.endPoint);
            this.pillars = this.points.map((/**
             * @param {?} point
             * @param {?} index
             * @param {?} array
             * @return {?}
             */
            (point, index, array) => {
                if (index === 0) { // first should be skipped. then all next end is current, start is previous, so don't make calc for fist
                    return (/** @type {?} */ ({}));
                }
                /** @type {?} */
                const item = {
                    startValue: Math.floor(array[index - 1].value / this.xScale * 100),
                    endValue: Math.floor(point.value / this.xScale * 100),
                    startPosition: daysDiff(this.startPoint, array[index - 1].time),
                    endPosition: daysDiff(this.startPoint, point.time)
                };
                return Object.assign({}, item, { width: Math.floor((item.endPosition - item.startPosition) / this.days * 100) });
            })).slice(1);
        }
    }
}
if (false) {
    /** @type {?} */
    LineChart.prototype.points;
    /** @type {?} */
    LineChart.prototype.pillars;
    /** @type {?} */
    LineChart.prototype.xScale;
    /** @type {?} */
    LineChart.prototype.days;
    /** @type {?} */
    LineChart.prototype.startPoint;
    /** @type {?} */
    LineChart.prototype.endPoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3b2p0ZWsxMTUwL3NpbXBsZS1jaGFydHMvIiwic291cmNlcyI6WyJtb2RlbHMvbGluZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQUU3QyxvQ0FHQzs7O0lBRkMsK0JBQWM7O0lBQ2QsOEJBQVE7Ozs7O0FBR1Ysb0NBTUM7OztJQUxDLG9DQUFtQjs7SUFDbkIsa0NBQWlCOztJQUNqQix1Q0FBc0I7O0lBQ3RCLHFDQUFvQjs7SUFDcEIsK0JBQWM7O0FBR2hCLE1BQU0sT0FBTyxTQUFTOzs7OztJQVFwQixZQUFZLEtBQStDO1FBUDNELFdBQU0sR0FBMkIsRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBcUIsRUFBRSxDQUFDO1FBTzdCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLHdHQUF3RztvQkFDekgsT0FBTyxtQkFBQSxFQUFFLEVBQWtCLENBQUM7aUJBQzdCOztzQkFDSyxJQUFJLEdBQUc7b0JBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2xFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ3JELGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDL0QsV0FBVyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBQ25EO2dCQUNELHlCQUNLLElBQUksSUFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQzVFO1lBQ0osQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQ0Y7OztJQS9CQywyQkFBb0M7O0lBQ3BDLDRCQUErQjs7SUFDL0IsMkJBQWU7O0lBQ2YseUJBQWE7O0lBQ2IsK0JBQWlCOztJQUNqQiw2QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRheXNEaWZmLCBvcmRlciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFBvaW50PFQ+IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGltZTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2FydFBpbGxhciB7XG4gIHN0YXJ0VmFsdWU6IG51bWJlcjsgLy8geFNjYWxlIC0gcG9pbnRbLTFdLnZhbHVlICogMTAwJVxuICBlbmRWYWx1ZTogbnVtYmVyOyAvLyB4U2NhbGUgLSBwb2ludFswXS52YWx1ZSAqIDEwMCVcbiAgc3RhcnRQb3NpdGlvbjogbnVtYmVyOyAvLyAoZGF5cyAtIHBvaW50Wy0xXS5zdGFydClcbiAgZW5kUG9zaXRpb246IG51bWJlcjsgLy8gKGRheXMgLSBwb2ludFswXS5zdGFydClcbiAgd2lkdGg6IG51bWJlcjsgLy8gKGVuZCAtIHN0YXJ0KSAvIGRheXMgKiAxMDAlXG59XG5cbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnQge1xuICBwb2ludHM6IExpbmVDaGFydFBvaW50PERhdGU+W10gPSBbXTtcbiAgcGlsbGFyczogTGluZUNhcnRQaWxsYXJbXSA9IFtdO1xuICB4U2NhbGU6IG51bWJlcjsgLy8gTWF4IHBvaW50IHZhbHVlICsgMTAlXG4gIGRheXM6IG51bWJlcjsgLy8gbm8gb2YgZGF5cyBiZXR3ZWVuIGZpc3QgYW5kIGxhc3QgcG9pbnRcbiAgc3RhcnRQb2ludDogRGF0ZTsgLy8gTmV3ZXN0IHBvaW50XG4gIGVuZFBvaW50OiBEYXRlOyAvLyBOZXdlc3QgcG9pbnRcblxuICBjb25zdHJ1Y3RvcihpdGVtczogTGluZUNoYXJ0UG9pbnQ8RGF0ZSB8IG51bWJlciB8IHN0cmluZz5bXSkge1xuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IG9yZGVyKGl0ZW1zLm1hcChpID0+ICh7IHZhbHVlOiBpLnZhbHVlLCB0aW1lOiBuZXcgRGF0ZShpLnRpbWUpIH0pKSwgJ3RpbWUnKTtcbiAgICAgIHRoaXMueFNjYWxlID0gdGhpcy5wb2ludHMucmVkdWNlKChhLCBiKSA9PiBhLnZhbHVlID49IGIudmFsdWUgPyBhIDogYiwgeyB2YWx1ZTogMCB9KS52YWx1ZSAqIDEuMTtcbiAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHRoaXMucG9pbnRzLnNsaWNlKDAsIDEpWzBdLnRpbWU7XG4gICAgICB0aGlzLmVuZFBvaW50ID0gdGhpcy5wb2ludHMuc2xpY2UoLTEpWzBdLnRpbWU7XG4gICAgICB0aGlzLmRheXMgPSBkYXlzRGlmZih0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQpO1xuICAgICAgdGhpcy5waWxsYXJzID0gdGhpcy5wb2ludHMubWFwKChwb2ludCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkgeyAvLyBmaXJzdCBzaG91bGQgYmUgc2tpcHBlZC4gdGhlbiBhbGwgbmV4dCBlbmQgaXMgY3VycmVudCwgc3RhcnQgaXMgcHJldmlvdXMsIHNvIGRvbid0IG1ha2UgY2FsYyBmb3IgZmlzdFxuICAgICAgICAgIHJldHVybiB7fSBhcyBMaW5lQ2FydFBpbGxhcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgIHN0YXJ0VmFsdWU6IE1hdGguZmxvb3IoYXJyYXlbaW5kZXggLSAxXS52YWx1ZSAvIHRoaXMueFNjYWxlICogMTAwKSxcbiAgICAgICAgICBlbmRWYWx1ZTogTWF0aC5mbG9vcihwb2ludC52YWx1ZSAvIHRoaXMueFNjYWxlICogMTAwKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uOiBkYXlzRGlmZih0aGlzLnN0YXJ0UG9pbnQsIGFycmF5W2luZGV4IC0gMV0udGltZSksXG4gICAgICAgICAgZW5kUG9zaXRpb246IGRheXNEaWZmKHRoaXMuc3RhcnRQb2ludCwgcG9pbnQudGltZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIHdpZHRoOiBNYXRoLmZsb29yKChpdGVtLmVuZFBvc2l0aW9uIC0gaXRlbS5zdGFydFBvc2l0aW9uKSAvIHRoaXMuZGF5cyAqIDEwMClcbiAgICAgICAgfTtcbiAgICAgIH0pLnNsaWNlKDEpO1xuICAgIH1cbiAgfVxufVxuIl19