(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@wojtek1150/simple-charts', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory((global.wojtek1150 = global.wojtek1150 || {}, global.wojtek1150['simple-charts'] = {}), global.ng.core, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, platformBrowser, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            { type: core.Component, args: [{
                        selector: 'lib-line-chart',
                        template: "<div class=\"pillar\" *ngFor=\"let pillar of chart.pillars\" [style.width]=\"pillar.width + '%'\">\n  <div class=\"clip-path\" [style.clip-path]=\"shape(pillar)\"></div>\n  <div class=\"line\" [style.clip-path]=\"line(pillar)\"></div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(.1em,rgba(255,255,255,.07)),color-stop(.1em,transparent)),-webkit-gradient(linear,left top,right top,color-stop(.1em,rgba(255,255,255,.07)),color-stop(.1em,transparent));background-image:linear-gradient(rgba(255,255,255,.07) .1em,transparent .1em),linear-gradient(90deg,rgba(255,255,255,.07) .1em,transparent .1em);background-size:1em 1em;box-sizing:border-box;display:-webkit-box;display:flex;height:200px;width:100%}:host .pillar{box-sizing:border-box;height:100%;position:relative}:host .clip-path{background:-webkit-gradient(linear,left top,left bottom,from(white),color-stop(50%,rgba(255,255,255,.4)),to(rgba(255,255,255,0)));background:linear-gradient(180deg,#fff 0,rgba(255,255,255,.4) 50%,rgba(255,255,255,0) 100%);height:100%;position:relative;-webkit-transition:-webkit-clip-path .3s ease-in-out;transition:clip-path .3s ease-in-out;transition:clip-path .3s ease-in-out,-webkit-clip-path .3s ease-in-out;width:100%;z-index:1}:host .line{background:#fff;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}"]
                    }] }
        ];
        /** @nocollapse */
        LineChartComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        LineChartComponent.propDecorators = {
            points: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'lib-multi-line-chart',
                        template: "<div class=\"chart\">\n\n  <div class=\"left axis-y\">\n    <span *ngFor=\"let y of chart.scaleY\">{{y}}</span>\n  </div>\n\n  <div class=\"lines\">\n    <div class=\"line\" *ngFor=\"let line of chart.lines\">\n\n      <div class=\"segment {{line.lineType}}\" *ngFor=\"let pillar of line.items\">\n        <div class=\"shape\" [style.clip-path]=\"segmentPath(pillar)\"></div>\n        <div class=\"dot\" [style.bottom]=\"dotLocation(pillar)\">\n          <span>{{pillar.y}}{{line.valueType === 'percents' ? '%' : ''}}</span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"column\" *ngFor=\"let x of chart.scaleX\">\n        <div class=\"row\" *ngFor=\"let y of chart.scaleY\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"right axis-y\">\n    <span>100%</span>\n    <span>75%</span>\n    <span>50%</span>\n    <span>25%</span>\n  </div>\n\n  <div class=\"axis-x\">\n    <span>&nbsp;</span>\n    <span *ngFor=\"let x of chart.scaleX\">{{x}}</span>\n  </div>\n\n</div>\n\n<div class=\"legend\">\n  <div class=\"item\" *ngFor=\"let line of chart.lines\">\n    <div class=\"icon {{line.lineType}}\"></div>\n    {{line.label}}\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{background:#4266e3;border-radius:5px;color:#fff;display:block;margin:10px 0}.chart{display:-ms-grid;display:grid;font-size:12px;-ms-grid-columns:40px auto 45px;grid-template-columns:40px auto 45px}.chart .axis-y{display:-ms-grid;display:grid;padding-top:10px}.chart .axis-y.left{-ms-grid-rows:33% 32% 32%;grid-template-rows:33% 32% 32%;padding-left:12px}.chart .axis-y.right{-ms-grid-rows:24% 25% 25% 26%;grid-template-rows:24% 25% 25% 26%;padding-left:5px}.chart .axis-x{display:-webkit-box;display:flex;-ms-grid-column:2;grid-column:2;-webkit-box-pack:justify;justify-content:space-between;margin:10px -2px 15px 0;text-align:center}.lines{border-bottom:1px solid rgba(255,255,255,.7);border-left:1px solid rgba(255,255,255,.7);box-sizing:border-box;display:block;height:175px;position:relative;width:100%}.grid,.line{bottom:0;display:-webkit-box;display:flex;-webkit-box-pack:stretch;justify-content:stretch;left:0;position:absolute;right:0}.line{top:20px;z-index:1}.grid{top:0;z-index:0}.grid .column{border-right:1px solid rgba(255,255,255,.2);display:-ms-grid;display:grid;-webkit-box-flex:1;flex:1;-ms-grid-rows:(1fr)[3];grid-template-rows:repeat(3,1fr);padding-top:20px}.grid .column .row{border-top:1px solid rgba(255,255,255,.2)}.segment{box-sizing:border-box;display:block;-webkit-box-flex:1;flex:1;height:100%;position:relative}.segment .shape{height:100%;position:absolute;width:100%}.segment .dot{background:#6dd5b4;border-radius:50%;cursor:pointer;display:block;height:8px;position:absolute;right:0;-webkit-transform:translate(50%,50%);transform:translate(50%,50%);visibility:hidden;width:8px;z-index:2}.segment .dot span{background:#222;border-radius:3px;display:block;font-size:10px;left:50%;opacity:0;padding:3px 6px;position:absolute;-webkit-transform:translate(-50%,-120%);transform:translate(-50%,-120%);-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;z-index:3}.segment .dot:hover span{opacity:1}.segment.normal .shape{background:rgba(255,255,255,.6)}.segment.points .shape{background:#6dd5b4}.segment.points .dot{visibility:visible}.segment.dashed .shape{background-image:-webkit-gradient(linear,left top,right top,color-stop(50%,#fff),color-stop(50%,transparent));background-image:linear-gradient(to right,#fff 50%,transparent 50%);background-repeat:repeat;background-size:3px 100%}.legend{display:-webkit-box;display:flex;font-size:11px;-webkit-box-pack:justify;justify-content:space-between}.legend .item{display:-ms-grid;display:grid;-ms-grid-columns:25px auto;grid-template-columns:25px auto;padding:5px}.legend .icon{height:1px;margin-top:8px;position:relative;width:17px}.legend .icon.normal{background:rgba(255,255,255,.6)}.legend .icon.dashed{border-bottom:1px dashed #fff}.legend .icon.points{background:#6dd5b4}.legend .icon.points::after{background:#6dd5b4;border-radius:50%;content:\"\";display:block;height:7px;left:5px;position:absolute;top:-3px;width:7px}"]
                    }] }
        ];
        /** @nocollapse */
        MultiLineChartComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        MultiLineChartComponent.propDecorators = {
            data: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [
                            LineChartComponent,
                            MultiLineChartComponent
                        ],
                        imports: [common.CommonModule],
                        exports: [
                            LineChartComponent,
                            MultiLineChartComponent
                        ]
                    },] }
        ];
        return ChartsModule;
    }());

    exports.ChartsModule = ChartsModule;
    exports.LineChart = LineChart;
    exports.LineChartComponent = LineChartComponent;
    exports.MultiLineChart = MultiLineChart;
    exports.MultiLineChartComponent = MultiLineChartComponent;
    exports.MultiLineChartLineType = MultiLineChartLineType;
    exports.MultiLineChartValueType = MultiLineChartValueType;
    exports.prepareShapes = prepareShapes;
    exports.ɵa = order;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=wojtek1150-simple-charts.umd.js.map
