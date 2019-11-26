/**
 * @fileoverview added by tsickle
 * Generated from: models/multi-line-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { axisYScale, max, order } from '../helpers';
/** @enum {string} */
var MultiLineChartLineType = {
    normal: "normal",
    dashed: "dashed",
    points: "points",
};
export { MultiLineChartLineType };
/** @enum {string} */
var MultiLineChartValueType = {
    numbers: "numbers",
    percents: "percents",
};
export { MultiLineChartValueType };
/**
 * @record
 */
export function MultiLineChartLineData() { }
if (false) {
    /** @type {?} */
    MultiLineChartLineData.prototype.label;
    /** @type {?} */
    MultiLineChartLineData.prototype.lineType;
    /** @type {?} */
    MultiLineChartLineData.prototype.valueType;
}
/**
 * @record
 */
export function MultiLineChartPillar() { }
if (false) {
    /** @type {?} */
    MultiLineChartPillar.prototype.shapeStart;
    /** @type {?} */
    MultiLineChartPillar.prototype.shapeEnd;
    /** @type {?} */
    MultiLineChartPillar.prototype.x;
    /** @type {?} */
    MultiLineChartPillar.prototype.y;
}
/**
 * @record
 */
export function MultiLineChartLineInput() { }
if (false) {
    /** @type {?} */
    MultiLineChartLineInput.prototype.items;
}
/**
 * @record
 */
export function MultiLineChartLineOutput() { }
if (false) {
    /** @type {?} */
    MultiLineChartLineOutput.prototype.items;
}
var MultiLineChart = /** @class */ (function () {
    function MultiLineChart(data) {
        var _this = this;
        this.lines = [];
        if (data && data.length > 0) {
            /** @type {?} */
            var valueTyped = data.filter((/**
             * @param {?} line
             * @return {?}
             */
            function (line) { return line.valueType === MultiLineChartValueType.numbers; }));
            if (!valueTyped.length) {
                throw Error('You must provide at least one number type line');
            }
            /** @type {?} */
            var maxItems = valueTyped.map((/**
             * @param {?} line
             * @return {?}
             */
            function (line) { return max(line.items, 'y'); }));
            /** @type {?} */
            var scale = axisYScale(max(maxItems, 'y').y);
            this.maxValue = scale.maxValue;
            this.scaleY = scale.scaleY;
            this.scaleX = data[0].items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.x; }));
            this.lines = data.map((/**
             * @param {?} line
             * @return {?}
             */
            function (line) { return ({
                label: line.label,
                lineType: line.lineType,
                valueType: line.valueType,
                items: prepareShapes(line.items, _this.maxValue, line.valueType === MultiLineChartValueType.percents)
            }); }));
        }
    }
    return MultiLineChart;
}());
export { MultiLineChart };
if (false) {
    /** @type {?} */
    MultiLineChart.prototype.maxValue;
    /** @type {?} */
    MultiLineChart.prototype.scaleY;
    /** @type {?} */
    MultiLineChart.prototype.scaleX;
    /** @type {?} */
    MultiLineChart.prototype.lines;
}
/**
 * @param {?} items
 * @param {?} maxValue
 * @param {?} percents
 * @return {?}
 */
export function prepareShapes(items, maxValue, percents) {
    return order(items, 'x')
        .map((/**
     * @param {?} point
     * @param {?} index
     * @param {?} array
     * @return {?}
     */
    function (point, index, array) {
        if (index === 0) {
            return;
        }
        return {
            x: point.x,
            y: point.y,
            shapeStart: percents ? array[index - 1].y : Math.floor(array[index - 1].y / maxValue * 100),
            shapeEnd: percents ? point.y : Math.floor(point.y / maxValue * 100),
        };
    }))
        .slice(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktbGluZS1jaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3b2p0ZWsxMTUwL3NpbXBsZS1jaGFydHMvIiwic291cmNlcyI6WyJtb2RlbHMvbXVsdGktbGluZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFcEQsSUFBWSxzQkFBc0I7SUFDaEMsTUFBTSxVQUFXO0lBQ2pCLE1BQU0sVUFBVztJQUNqQixNQUFNLFVBQVc7RUFDbEI7OztBQUVELElBQVksdUJBQXVCO0lBQ2pDLE9BQU8sV0FBWTtJQUNuQixRQUFRLFlBQWE7RUFDdEI7Ozs7O0FBRUQsNENBSUM7OztJQUhDLHVDQUFjOztJQUNkLDBDQUFpQzs7SUFDakMsMkNBQW1DOzs7OztBQUdyQywwQ0FLQzs7O0lBSkMsMENBQW1COztJQUNuQix3Q0FBaUI7O0lBQ2pCLGlDQUFVOztJQUNWLGlDQUFVOzs7OztBQUdaLDZDQUtDOzs7SUFKQyx3Q0FHRzs7Ozs7QUFHTCw4Q0FFQzs7O0lBREMseUNBQThCOztBQUdoQztJQU1FLHdCQUFZLElBQStCO1FBQTNDLGlCQWtCQztRQXBCRCxVQUFLLEdBQStCLEVBQUUsQ0FBQztRQUdyQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsS0FBSyx1QkFBdUIsQ0FBQyxPQUFPLEVBQWxELENBQWtELEVBQUM7WUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLE1BQU0sS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7YUFDL0Q7O2dCQUNLLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQXBCLENBQW9CLEVBQUM7O2dCQUN2RCxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxFQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQztnQkFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7YUFDckcsQ0FBQyxFQUw0QixDQUs1QixFQUFDLENBQUM7U0FDTDtJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7SUF4QkMsa0NBQWlCOztJQUNqQixnQ0FBaUM7O0lBQ2pDLGdDQUFpQjs7SUFDakIsK0JBQXVDOzs7Ozs7OztBQXVCekMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFpQyxFQUFFLFFBQWdCLEVBQUUsUUFBaUI7SUFDbEcsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNyQixHQUFHOzs7Ozs7SUFBQyxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztRQUN2QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDNUIsT0FBTztZQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNWLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDM0YsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUMsRUFBQztTQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGlzWVNjYWxlLCBtYXgsIG9yZGVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBlbnVtIE11bHRpTGluZUNoYXJ0TGluZVR5cGUge1xuICBub3JtYWwgPSAnbm9ybWFsJyxcbiAgZGFzaGVkID0gJ2Rhc2hlZCcsXG4gIHBvaW50cyA9ICdwb2ludHMnXG59XG5cbmV4cG9ydCBlbnVtIE11bHRpTGluZUNoYXJ0VmFsdWVUeXBlIHtcbiAgbnVtYmVycyA9ICdudW1iZXJzJyxcbiAgcGVyY2VudHMgPSAncGVyY2VudHMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlMaW5lQ2hhcnRMaW5lRGF0YSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGxpbmVUeXBlOiBNdWx0aUxpbmVDaGFydExpbmVUeXBlO1xuICB2YWx1ZVR5cGU6IE11bHRpTGluZUNoYXJ0VmFsdWVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpTGluZUNoYXJ0UGlsbGFyIHtcbiAgc2hhcGVTdGFydDogbnVtYmVyOyAvLyBQZXJjZW50c1xuICBzaGFwZUVuZDogbnVtYmVyOyAvLyBQZXJjZW50c1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUxpbmVDaGFydExpbmVJbnB1dCBleHRlbmRzIE11bHRpTGluZUNoYXJ0TGluZURhdGEge1xuICBpdGVtczoge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gIH1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpTGluZUNoYXJ0TGluZU91dHB1dCBleHRlbmRzIE11bHRpTGluZUNoYXJ0TGluZURhdGEge1xuICBpdGVtczogTXVsdGlMaW5lQ2hhcnRQaWxsYXJbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpTGluZUNoYXJ0IHtcbiAgbWF4VmFsdWU6IG51bWJlcjtcbiAgc2NhbGVZOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIHNjYWxlWDogbnVtYmVyW107XG4gIGxpbmVzOiBNdWx0aUxpbmVDaGFydExpbmVPdXRwdXRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IE11bHRpTGluZUNoYXJ0TGluZUlucHV0W10pIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbHVlVHlwZWQgPSBkYXRhLmZpbHRlcihsaW5lID0+IGxpbmUudmFsdWVUeXBlID09PSBNdWx0aUxpbmVDaGFydFZhbHVlVHlwZS5udW1iZXJzKTtcbiAgICAgIGlmICghdmFsdWVUeXBlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3Qgb25lIG51bWJlciB0eXBlIGxpbmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1heEl0ZW1zID0gdmFsdWVUeXBlZC5tYXAobGluZSA9PiBtYXgobGluZS5pdGVtcywgJ3knKSk7XG4gICAgICBjb25zdCBzY2FsZSA9IGF4aXNZU2NhbGUobWF4KG1heEl0ZW1zLCAneScpLnkpO1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHNjYWxlLm1heFZhbHVlO1xuICAgICAgdGhpcy5zY2FsZVkgPSBzY2FsZS5zY2FsZVk7XG4gICAgICB0aGlzLnNjYWxlWCA9IGRhdGFbMF0uaXRlbXMubWFwKGkgPT4gaS54KTtcbiAgICAgIHRoaXMubGluZXMgPSBkYXRhLm1hcChsaW5lID0+ICh7XG4gICAgICAgIGxhYmVsOiBsaW5lLmxhYmVsLFxuICAgICAgICBsaW5lVHlwZTogbGluZS5saW5lVHlwZSxcbiAgICAgICAgdmFsdWVUeXBlOiBsaW5lLnZhbHVlVHlwZSxcbiAgICAgICAgaXRlbXM6IHByZXBhcmVTaGFwZXMobGluZS5pdGVtcywgdGhpcy5tYXhWYWx1ZSwgbGluZS52YWx1ZVR5cGUgPT09IE11bHRpTGluZUNoYXJ0VmFsdWVUeXBlLnBlcmNlbnRzKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVNoYXBlcyhpdGVtczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIG1heFZhbHVlOiBudW1iZXIsIHBlcmNlbnRzOiBib29sZWFuKTogTXVsdGlMaW5lQ2hhcnRQaWxsYXJbXSB7XG4gIHJldHVybiBvcmRlcihpdGVtcywgJ3gnKVxuICAgIC5tYXAoKHBvaW50LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgIHNoYXBlU3RhcnQ6IHBlcmNlbnRzID8gYXJyYXlbaW5kZXggLSAxXS55IDogTWF0aC5mbG9vcihhcnJheVtpbmRleCAtIDFdLnkgLyBtYXhWYWx1ZSAqIDEwMCksXG4gICAgICAgIHNoYXBlRW5kOiBwZXJjZW50cyA/IHBvaW50LnkgOiBNYXRoLmZsb29yKHBvaW50LnkgLyBtYXhWYWx1ZSAqIDEwMCksXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNsaWNlKDEpO1xufVxuXG4iXX0=