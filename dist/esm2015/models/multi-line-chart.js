/**
 * @fileoverview added by tsickle
 * Generated from: models/multi-line-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { axisYScale, max, order } from '../helpers';
/** @enum {string} */
const MultiLineChartLineType = {
    normal: "normal",
    dashed: "dashed",
    points: "points",
};
export { MultiLineChartLineType };
/** @enum {string} */
const MultiLineChartValueType = {
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
export class MultiLineChart {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.lines = [];
        if (data && data.length > 0) {
            /** @type {?} */
            const valueTyped = data.filter((/**
             * @param {?} line
             * @return {?}
             */
            line => line.valueType === MultiLineChartValueType.numbers));
            if (!valueTyped.length) {
                throw Error('You must provide at least one number type line');
            }
            /** @type {?} */
            const maxItems = valueTyped.map((/**
             * @param {?} line
             * @return {?}
             */
            line => max(line.items, 'y')));
            /** @type {?} */
            const scale = axisYScale(max(maxItems, 'y').y);
            this.maxValue = scale.maxValue;
            this.scaleY = scale.scaleY;
            this.scaleX = data[0].items.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i.x));
            this.lines = data.map((/**
             * @param {?} line
             * @return {?}
             */
            line => ({
                label: line.label,
                lineType: line.lineType,
                valueType: line.valueType,
                items: prepareShapes(line.items, this.maxValue, line.valueType === MultiLineChartValueType.percents)
            })));
        }
    }
}
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
    (point, index, array) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktbGluZS1jaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3b2p0ZWsxMTUwL3NpbXBsZS1jaGFydHMvIiwic291cmNlcyI6WyJtb2RlbHMvbXVsdGktbGluZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFcEQsTUFBWSxzQkFBc0I7SUFDaEMsTUFBTSxVQUFXO0lBQ2pCLE1BQU0sVUFBVztJQUNqQixNQUFNLFVBQVc7RUFDbEI7OztBQUVELE1BQVksdUJBQXVCO0lBQ2pDLE9BQU8sV0FBWTtJQUNuQixRQUFRLFlBQWE7RUFDdEI7Ozs7O0FBRUQsNENBSUM7OztJQUhDLHVDQUFjOztJQUNkLDBDQUFpQzs7SUFDakMsMkNBQW1DOzs7OztBQUdyQywwQ0FLQzs7O0lBSkMsMENBQW1COztJQUNuQix3Q0FBaUI7O0lBQ2pCLGlDQUFVOztJQUNWLGlDQUFVOzs7OztBQUdaLDZDQUtDOzs7SUFKQyx3Q0FHRzs7Ozs7QUFHTCw4Q0FFQzs7O0lBREMseUNBQThCOztBQUdoQyxNQUFNLE9BQU8sY0FBYzs7OztJQU16QixZQUFZLElBQStCO1FBRjNDLFVBQUssR0FBK0IsRUFBRSxDQUFDO1FBR3JDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDckIsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLHVCQUF1QixDQUFDLE9BQU8sRUFBQztZQUMxRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsTUFBTSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQzthQUMvRDs7a0JBQ0ssUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBQzs7a0JBQ3ZELEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssdUJBQXVCLENBQUMsUUFBUSxDQUFDO2FBQ3JHLENBQUMsRUFBQyxDQUFDO1NBQ0w7SUFDSCxDQUFDO0NBQ0Y7OztJQXhCQyxrQ0FBaUI7O0lBQ2pCLGdDQUFpQzs7SUFDakMsZ0NBQWlCOztJQUNqQiwrQkFBdUM7Ozs7Ozs7O0FBdUJ6QyxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWlDLEVBQUUsUUFBZ0IsRUFBRSxRQUFpQjtJQUNsRyxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ3JCLEdBQUc7Ozs7OztJQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUMzQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDNUIsT0FBTztZQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNWLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDM0YsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUMsRUFBQztTQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGlzWVNjYWxlLCBtYXgsIG9yZGVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBlbnVtIE11bHRpTGluZUNoYXJ0TGluZVR5cGUge1xuICBub3JtYWwgPSAnbm9ybWFsJyxcbiAgZGFzaGVkID0gJ2Rhc2hlZCcsXG4gIHBvaW50cyA9ICdwb2ludHMnXG59XG5cbmV4cG9ydCBlbnVtIE11bHRpTGluZUNoYXJ0VmFsdWVUeXBlIHtcbiAgbnVtYmVycyA9ICdudW1iZXJzJyxcbiAgcGVyY2VudHMgPSAncGVyY2VudHMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlMaW5lQ2hhcnRMaW5lRGF0YSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGxpbmVUeXBlOiBNdWx0aUxpbmVDaGFydExpbmVUeXBlO1xuICB2YWx1ZVR5cGU6IE11bHRpTGluZUNoYXJ0VmFsdWVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpTGluZUNoYXJ0UGlsbGFyIHtcbiAgc2hhcGVTdGFydDogbnVtYmVyOyAvLyBQZXJjZW50c1xuICBzaGFwZUVuZDogbnVtYmVyOyAvLyBQZXJjZW50c1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUxpbmVDaGFydExpbmVJbnB1dCBleHRlbmRzIE11bHRpTGluZUNoYXJ0TGluZURhdGEge1xuICBpdGVtczoge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gIH1bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpTGluZUNoYXJ0TGluZU91dHB1dCBleHRlbmRzIE11bHRpTGluZUNoYXJ0TGluZURhdGEge1xuICBpdGVtczogTXVsdGlMaW5lQ2hhcnRQaWxsYXJbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpTGluZUNoYXJ0IHtcbiAgbWF4VmFsdWU6IG51bWJlcjtcbiAgc2NhbGVZOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIHNjYWxlWDogbnVtYmVyW107XG4gIGxpbmVzOiBNdWx0aUxpbmVDaGFydExpbmVPdXRwdXRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IE11bHRpTGluZUNoYXJ0TGluZUlucHV0W10pIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbHVlVHlwZWQgPSBkYXRhLmZpbHRlcihsaW5lID0+IGxpbmUudmFsdWVUeXBlID09PSBNdWx0aUxpbmVDaGFydFZhbHVlVHlwZS5udW1iZXJzKTtcbiAgICAgIGlmICghdmFsdWVUeXBlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3Qgb25lIG51bWJlciB0eXBlIGxpbmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1heEl0ZW1zID0gdmFsdWVUeXBlZC5tYXAobGluZSA9PiBtYXgobGluZS5pdGVtcywgJ3knKSk7XG4gICAgICBjb25zdCBzY2FsZSA9IGF4aXNZU2NhbGUobWF4KG1heEl0ZW1zLCAneScpLnkpO1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHNjYWxlLm1heFZhbHVlO1xuICAgICAgdGhpcy5zY2FsZVkgPSBzY2FsZS5zY2FsZVk7XG4gICAgICB0aGlzLnNjYWxlWCA9IGRhdGFbMF0uaXRlbXMubWFwKGkgPT4gaS54KTtcbiAgICAgIHRoaXMubGluZXMgPSBkYXRhLm1hcChsaW5lID0+ICh7XG4gICAgICAgIGxhYmVsOiBsaW5lLmxhYmVsLFxuICAgICAgICBsaW5lVHlwZTogbGluZS5saW5lVHlwZSxcbiAgICAgICAgdmFsdWVUeXBlOiBsaW5lLnZhbHVlVHlwZSxcbiAgICAgICAgaXRlbXM6IHByZXBhcmVTaGFwZXMobGluZS5pdGVtcywgdGhpcy5tYXhWYWx1ZSwgbGluZS52YWx1ZVR5cGUgPT09IE11bHRpTGluZUNoYXJ0VmFsdWVUeXBlLnBlcmNlbnRzKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVNoYXBlcyhpdGVtczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10sIG1heFZhbHVlOiBudW1iZXIsIHBlcmNlbnRzOiBib29sZWFuKTogTXVsdGlMaW5lQ2hhcnRQaWxsYXJbXSB7XG4gIHJldHVybiBvcmRlcihpdGVtcywgJ3gnKVxuICAgIC5tYXAoKHBvaW50LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkgeyByZXR1cm47IH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgIHNoYXBlU3RhcnQ6IHBlcmNlbnRzID8gYXJyYXlbaW5kZXggLSAxXS55IDogTWF0aC5mbG9vcihhcnJheVtpbmRleCAtIDFdLnkgLyBtYXhWYWx1ZSAqIDEwMCksXG4gICAgICAgIHNoYXBlRW5kOiBwZXJjZW50cyA/IHBvaW50LnkgOiBNYXRoLmZsb29yKHBvaW50LnkgLyBtYXhWYWx1ZSAqIDEwMCksXG4gICAgICB9O1xuICAgIH0pXG4gICAgLnNsaWNlKDEpO1xufVxuXG4iXX0=