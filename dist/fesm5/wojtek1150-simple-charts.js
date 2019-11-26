import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: helpers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daysDiff = (/**
 * @param {?} start
 * @param {?} end
 * @return {?}
 */
function (start, end) { return Math.round((end - start) / (1000 * 60 * 60 * 24)); });
/** @type {?} */
var order = (/**
 * @param {?} items
 * @param {?} key
 * @return {?}
 */
function (items, key) { return items.sort((/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function (a, b) { return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0); })); });
/** @type {?} */
var max = (/**
 * @param {?} items
 * @param {?} key
 * @return {?}
 */
function (items, key) { return items.reduce((/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function (a, b) { return a[key] >= b[key] ? a : b; }), {}); });
/** @type {?} */
var axisYScale = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    if (value <= 15) {
        return { maxValue: 15, scaleY: [15, 10, 5] };
    }
    if (value <= 30) {
        return { maxValue: 30, scaleY: [30, 20, 10] };
    }
    if (value <= 45) {
        return { maxValue: 45, scaleY: [45, 30, 15] };
    }
    if (value <= 60) {
        return { maxValue: 60, scaleY: [60, 40, 20] };
    }
    if (value <= 120) {
        return { maxValue: 120, scaleY: [120, 80, 40] };
    }
    /** @type {?} */
    var maxValue = Math.ceil(value / 100) * 100;
    /** @type {?} */
    var step = Math.ceil(maxValue / 3 / 10) * 10;
    return { maxValue: maxValue, scaleY: [maxValue, maxValue - step, maxValue - step - step] };
});

/**
 * @fileoverview added by tsickle
 * Generated from: models/line-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function LineChartPoint() { }
if (false) {
    /** @type {?} */
    LineChartPoint.prototype.value;
    /** @type {?} */
    LineChartPoint.prototype.time;
}
/**
 * @record
 */
function LineCartPillar() { }
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
                return __assign({}, item, { width: Math.floor((item.endPosition - item.startPosition) / _this.days * 100) });
            })).slice(1);
        }
    }
    return LineChart;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: components/line-chart/line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(LineChartComponent.prototype, "points", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.chart = new LineChart(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pillar
     * @return {?}
     */
    LineChartComponent.prototype.shape = /**
     * @param {?} pillar
     * @return {?}
     */
    function (pillar) {
        /** @type {?} */
        var polygon = "polygon(0 " + (100 - pillar.startValue) + "%, 100% " + (100 - pillar.endValue) + "%, 100% 100%, 0% 100%)";
        return this.sanitizer.bypassSecurityTrustStyle(polygon);
    };
    /**
     * @param {?} pillar
     * @return {?}
     */
    LineChartComponent.prototype.line = /**
     * @param {?} pillar
     * @return {?}
     */
    function (pillar) {
        /** @type {?} */
        var polygon = "polygon(0 " + (100 - pillar.startValue) + "%, 100% " + (100 - pillar.endValue) + "%, 100% " + (102 - pillar.endValue) + "%, 0 " + (102 - pillar.startValue) + "%)";
        return this.sanitizer.bypassSecurityTrustStyle(polygon);
    };
    LineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-line-chart',
                    template: "<div class=\"pillar\" *ngFor=\"let pillar of chart.pillars\" [style.width]=\"pillar.width + '%'\">\n  <div class=\"clip-path\" [style.clip-path]=\"shape(pillar)\"></div>\n  <div class=\"line\" [style.clip-path]=\"line(pillar)\"></div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(.1em,rgba(255,255,255,.07)),color-stop(.1em,transparent)),-webkit-gradient(linear,left top,right top,color-stop(.1em,rgba(255,255,255,.07)),color-stop(.1em,transparent));background-image:linear-gradient(rgba(255,255,255,.07) .1em,transparent .1em),linear-gradient(90deg,rgba(255,255,255,.07) .1em,transparent .1em);background-size:1em 1em;box-sizing:border-box;display:-webkit-box;display:flex;height:200px;width:100%}:host .pillar{box-sizing:border-box;height:100%;position:relative}:host .clip-path{background:-webkit-gradient(linear,left top,left bottom,from(white),color-stop(50%,rgba(255,255,255,.4)),to(rgba(255,255,255,0)));background:linear-gradient(180deg,#fff 0,rgba(255,255,255,.4) 50%,rgba(255,255,255,0) 100%);height:100%;position:relative;-webkit-transition:-webkit-clip-path .3s ease-in-out;transition:clip-path .3s ease-in-out;transition:clip-path .3s ease-in-out,-webkit-clip-path .3s ease-in-out;width:100%;z-index:1}:host .line{background:#fff;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    LineChartComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    LineChartComponent.propDecorators = {
        points: [{ type: Input }]
    };
    return LineChartComponent;
}());
if (false) {
    /** @type {?} */
    LineChartComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    LineChartComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: models/multi-line-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MultiLineChartLineType = {
    normal: "normal",
    dashed: "dashed",
    points: "points",
};
/** @enum {string} */
var MultiLineChartValueType = {
    numbers: "numbers",
    percents: "percents",
};
/**
 * @record
 */
function MultiLineChartLineData() { }
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
function MultiLineChartPillar() { }
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
function MultiLineChartLineInput() { }
if (false) {
    /** @type {?} */
    MultiLineChartLineInput.prototype.items;
}
/**
 * @record
 */
function MultiLineChartLineOutput() { }
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
function prepareShapes(items, maxValue, percents) {
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

/**
 * @fileoverview added by tsickle
 * Generated from: components/multi-line-chart/multi-line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiLineChartComponent = /** @class */ (function () {
    function MultiLineChartComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(MultiLineChartComponent.prototype, "data", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.chart = new MultiLineChart(value);
            console.log('MultiLineChartComponent', value, this.chart);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pillar
     * @return {?}
     */
    MultiLineChartComponent.prototype.segmentPath = /**
     * @param {?} pillar
     * @return {?}
     */
    function (pillar) {
        /** @type {?} */
        var polygon = "polygon(0 " + (100 - pillar.shapeStart) + "%, 100% " + (100 - pillar.shapeEnd) + "%, 100% " + (101 - pillar.shapeEnd) + "%, 0 " + (101 - pillar.shapeStart) + "%)";
        return this.sanitizer.bypassSecurityTrustStyle(polygon);
    };
    /**
     * @param {?} pillar
     * @return {?}
     */
    MultiLineChartComponent.prototype.dotLocation = /**
     * @param {?} pillar
     * @return {?}
     */
    function (pillar) {
        return this.sanitizer.bypassSecurityTrustStyle(pillar.shapeEnd + "%");
    };
    MultiLineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-multi-line-chart',
                    template: "<div class=\"chart\">\n\n  <div class=\"left axis-y\">\n    <span *ngFor=\"let y of chart.scaleY\">{{y}}</span>\n  </div>\n\n  <div class=\"lines\">\n    <div class=\"line\" *ngFor=\"let line of chart.lines\">\n\n      <div class=\"segment {{line.lineType}}\" *ngFor=\"let pillar of line.items\">\n        <div class=\"shape\" [style.clip-path]=\"segmentPath(pillar)\"></div>\n        <div class=\"dot\" [style.bottom]=\"dotLocation(pillar)\">\n          <span>{{pillar.y}}{{line.valueType === 'percents' ? '%' : ''}}</span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"column\" *ngFor=\"let x of chart.scaleX\">\n        <div class=\"row\" *ngFor=\"let y of chart.scaleY\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"right axis-y\">\n    <span>100%</span>\n    <span>75%</span>\n    <span>50%</span>\n    <span>25%</span>\n  </div>\n\n  <div class=\"axis-x\">\n    <span>&nbsp;</span>\n    <span *ngFor=\"let x of chart.scaleX\">{{x}}</span>\n  </div>\n\n</div>\n\n<div class=\"legend\">\n  <div class=\"item\" *ngFor=\"let line of chart.lines\">\n    <div class=\"icon {{line.lineType}}\"></div>\n    {{line.label}}\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{background:#4266e3;border-radius:5px;color:#fff;display:block;margin:10px 0}.chart{display:-ms-grid;display:grid;font-size:12px;-ms-grid-columns:40px auto 45px;grid-template-columns:40px auto 45px}.chart .axis-y{display:-ms-grid;display:grid;padding-top:10px}.chart .axis-y.left{-ms-grid-rows:33% 32% 32%;grid-template-rows:33% 32% 32%;padding-left:12px}.chart .axis-y.right{-ms-grid-rows:24% 25% 25% 26%;grid-template-rows:24% 25% 25% 26%;padding-left:5px}.chart .axis-x{display:-webkit-box;display:flex;-ms-grid-column:2;grid-column:2;-webkit-box-pack:justify;justify-content:space-between;margin:10px -2px 15px 0;text-align:center}.lines{border-bottom:1px solid rgba(255,255,255,.7);border-left:1px solid rgba(255,255,255,.7);box-sizing:border-box;display:block;height:175px;position:relative;width:100%}.grid,.line{bottom:0;display:-webkit-box;display:flex;-webkit-box-pack:stretch;justify-content:stretch;left:0;position:absolute;right:0}.line{top:20px;z-index:1}.grid{top:0;z-index:0}.grid .column{border-right:1px solid rgba(255,255,255,.2);display:-ms-grid;display:grid;-webkit-box-flex:1;flex:1;-ms-grid-rows:(1fr)[3];grid-template-rows:repeat(3,1fr);padding-top:20px}.grid .column .row{border-top:1px solid rgba(255,255,255,.2)}.segment{box-sizing:border-box;display:block;-webkit-box-flex:1;flex:1;height:100%;position:relative}.segment .shape{height:100%;position:absolute;width:100%}.segment .dot{background:#6dd5b4;border-radius:50%;cursor:pointer;display:block;height:8px;position:absolute;right:0;-webkit-transform:translate(50%,50%);transform:translate(50%,50%);visibility:hidden;width:8px;z-index:2}.segment .dot span{background:#222;border-radius:3px;display:block;font-size:10px;left:50%;opacity:0;padding:3px 6px;position:absolute;-webkit-transform:translate(-50%,-120%);transform:translate(-50%,-120%);-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;z-index:3}.segment .dot:hover span{opacity:1}.segment.normal .shape{background:rgba(255,255,255,.6)}.segment.points .shape{background:#6dd5b4}.segment.points .dot{visibility:visible}.segment.dashed .shape{background-image:-webkit-gradient(linear,left top,right top,color-stop(50%,#fff),color-stop(50%,transparent));background-image:linear-gradient(to right,#fff 50%,transparent 50%);background-repeat:repeat;background-size:3px 100%}.legend{display:-webkit-box;display:flex;font-size:11px;-webkit-box-pack:justify;justify-content:space-between}.legend .item{display:-ms-grid;display:grid;-ms-grid-columns:25px auto;grid-template-columns:25px auto;padding:5px}.legend .icon{height:1px;margin-top:8px;position:relative;width:17px}.legend .icon.normal{background:rgba(255,255,255,.6)}.legend .icon.dashed{border-bottom:1px dashed #fff}.legend .icon.points{background:#6dd5b4}.legend .icon.points::after{background:#6dd5b4;border-radius:50%;content:\"\";display:block;height:7px;left:5px;position:absolute;top:-3px;width:7px}"]
                }] }
    ];
    /** @nocollapse */
    MultiLineChartComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    MultiLineChartComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return MultiLineChartComponent;
}());
if (false) {
    /** @type {?} */
    MultiLineChartComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    MultiLineChartComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: charts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LineChartComponent,
                        MultiLineChartComponent
                    ],
                    imports: [CommonModule],
                    exports: [
                        LineChartComponent,
                        MultiLineChartComponent
                    ]
                },] }
    ];
    return ChartsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: wojtek1150-simple-charts.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChartsModule, LineChart, LineChartComponent, MultiLineChart, MultiLineChartComponent, MultiLineChartLineType, MultiLineChartValueType, prepareShapes, order as ɵa };
//# sourceMappingURL=wojtek1150-simple-charts.js.map
