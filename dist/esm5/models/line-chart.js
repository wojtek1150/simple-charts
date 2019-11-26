/**
 * @fileoverview added by tsickle
 * Generated from: models/line-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var LineChart = /** @class */ (function () {
    function LineChart(items) {
        var _this = this;
        this.points = [];
        this.pillars = [];
        if (items && items.length > 0) {
            this.points = order(items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return ({ value: i.value, time: new Date(i.time) }); })), 'time');
            this.xScale = this.points.reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.value >= b.value ? a : b; }), { value: 0 }).value * 1.1;
            this.startPoint = this.points.slice(0, 1)[0].time;
            this.endPoint = this.points.slice(-1)[0].time;
            this.days = daysDiff(this.startPoint, this.endPoint);
            this.pillars = this.points.map((/**
             * @param {?} point
             * @param {?} index
             * @param {?} array
             * @return {?}
             */
            function (point, index, array) {
                if (index === 0) { // first should be skipped. then all next end is current, start is previous, so don't make calc for fist
                    return (/** @type {?} */ ({}));
                }
                /** @type {?} */
                var item = {
                    startValue: Math.floor(array[index - 1].value / _this.xScale * 100),
                    endValue: Math.floor(point.value / _this.xScale * 100),
                    startPosition: daysDiff(_this.startPoint, array[index - 1].time),
                    endPosition: daysDiff(_this.startPoint, point.time)
                };
                return tslib_1.__assign({}, item, { width: Math.floor((item.endPosition - item.startPosition) / _this.days * 100) });
            })).slice(1);
        }
    }
    return LineChart;
}());
export { LineChart };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3b2p0ZWsxMTUwL3NpbXBsZS1jaGFydHMvIiwic291cmNlcyI6WyJtb2RlbHMvbGluZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFFN0Msb0NBR0M7OztJQUZDLCtCQUFjOztJQUNkLDhCQUFROzs7OztBQUdWLG9DQU1DOzs7SUFMQyxvQ0FBbUI7O0lBQ25CLGtDQUFpQjs7SUFDakIsdUNBQXNCOztJQUN0QixxQ0FBb0I7O0lBQ3BCLCtCQUFjOztBQUdoQjtJQVFFLG1CQUFZLEtBQStDO1FBQTNELGlCQXVCQztRQTlCRCxXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUNwQyxZQUFPLEdBQXFCLEVBQUUsQ0FBQztRQU83QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7O1lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsR0FBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7OztZQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUNqRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSx3R0FBd0c7b0JBQ3pILE9BQU8sbUJBQUEsRUFBRSxFQUFrQixDQUFDO2lCQUM3Qjs7b0JBQ0ssSUFBSSxHQUFHO29CQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNyRCxhQUFhLEVBQUUsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQy9ELFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNuRDtnQkFDRCw0QkFDSyxJQUFJLElBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUM1RTtZQUNKLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7OztJQS9CQywyQkFBb0M7O0lBQ3BDLDRCQUErQjs7SUFDL0IsMkJBQWU7O0lBQ2YseUJBQWE7O0lBQ2IsK0JBQWlCOztJQUNqQiw2QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRheXNEaWZmLCBvcmRlciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFBvaW50PFQ+IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGltZTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2FydFBpbGxhciB7XG4gIHN0YXJ0VmFsdWU6IG51bWJlcjsgLy8geFNjYWxlIC0gcG9pbnRbLTFdLnZhbHVlICogMTAwJVxuICBlbmRWYWx1ZTogbnVtYmVyOyAvLyB4U2NhbGUgLSBwb2ludFswXS52YWx1ZSAqIDEwMCVcbiAgc3RhcnRQb3NpdGlvbjogbnVtYmVyOyAvLyAoZGF5cyAtIHBvaW50Wy0xXS5zdGFydClcbiAgZW5kUG9zaXRpb246IG51bWJlcjsgLy8gKGRheXMgLSBwb2ludFswXS5zdGFydClcbiAgd2lkdGg6IG51bWJlcjsgLy8gKGVuZCAtIHN0YXJ0KSAvIGRheXMgKiAxMDAlXG59XG5cbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnQge1xuICBwb2ludHM6IExpbmVDaGFydFBvaW50PERhdGU+W10gPSBbXTtcbiAgcGlsbGFyczogTGluZUNhcnRQaWxsYXJbXSA9IFtdO1xuICB4U2NhbGU6IG51bWJlcjsgLy8gTWF4IHBvaW50IHZhbHVlICsgMTAlXG4gIGRheXM6IG51bWJlcjsgLy8gbm8gb2YgZGF5cyBiZXR3ZWVuIGZpc3QgYW5kIGxhc3QgcG9pbnRcbiAgc3RhcnRQb2ludDogRGF0ZTsgLy8gTmV3ZXN0IHBvaW50XG4gIGVuZFBvaW50OiBEYXRlOyAvLyBOZXdlc3QgcG9pbnRcblxuICBjb25zdHJ1Y3RvcihpdGVtczogTGluZUNoYXJ0UG9pbnQ8RGF0ZSB8IG51bWJlciB8IHN0cmluZz5bXSkge1xuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IG9yZGVyKGl0ZW1zLm1hcChpID0+ICh7IHZhbHVlOiBpLnZhbHVlLCB0aW1lOiBuZXcgRGF0ZShpLnRpbWUpIH0pKSwgJ3RpbWUnKTtcbiAgICAgIHRoaXMueFNjYWxlID0gdGhpcy5wb2ludHMucmVkdWNlKChhLCBiKSA9PiBhLnZhbHVlID49IGIudmFsdWUgPyBhIDogYiwgeyB2YWx1ZTogMCB9KS52YWx1ZSAqIDEuMTtcbiAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHRoaXMucG9pbnRzLnNsaWNlKDAsIDEpWzBdLnRpbWU7XG4gICAgICB0aGlzLmVuZFBvaW50ID0gdGhpcy5wb2ludHMuc2xpY2UoLTEpWzBdLnRpbWU7XG4gICAgICB0aGlzLmRheXMgPSBkYXlzRGlmZih0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQpO1xuICAgICAgdGhpcy5waWxsYXJzID0gdGhpcy5wb2ludHMubWFwKChwb2ludCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkgeyAvLyBmaXJzdCBzaG91bGQgYmUgc2tpcHBlZC4gdGhlbiBhbGwgbmV4dCBlbmQgaXMgY3VycmVudCwgc3RhcnQgaXMgcHJldmlvdXMsIHNvIGRvbid0IG1ha2UgY2FsYyBmb3IgZmlzdFxuICAgICAgICAgIHJldHVybiB7fSBhcyBMaW5lQ2FydFBpbGxhcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgIHN0YXJ0VmFsdWU6IE1hdGguZmxvb3IoYXJyYXlbaW5kZXggLSAxXS52YWx1ZSAvIHRoaXMueFNjYWxlICogMTAwKSxcbiAgICAgICAgICBlbmRWYWx1ZTogTWF0aC5mbG9vcihwb2ludC52YWx1ZSAvIHRoaXMueFNjYWxlICogMTAwKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uOiBkYXlzRGlmZih0aGlzLnN0YXJ0UG9pbnQsIGFycmF5W2luZGV4IC0gMV0udGltZSksXG4gICAgICAgICAgZW5kUG9zaXRpb246IGRheXNEaWZmKHRoaXMuc3RhcnRQb2ludCwgcG9pbnQudGltZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIHdpZHRoOiBNYXRoLmZsb29yKChpdGVtLmVuZFBvc2l0aW9uIC0gaXRlbS5zdGFydFBvc2l0aW9uKSAvIHRoaXMuZGF5cyAqIDEwMClcbiAgICAgICAgfTtcbiAgICAgIH0pLnNsaWNlKDEpO1xuICAgIH1cbiAgfVxufVxuIl19