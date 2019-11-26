/**
 * @fileoverview added by tsickle
 * Generated from: components/line-chart/line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LineChart } from '../../models/line-chart';
import { DomSanitizer } from '@angular/platform-browser';
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
export { LineChartComponent };
if (false) {
    /** @type {?} */
    LineChartComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    LineChartComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad29qdGVrMTE1MC9zaW1wbGUtY2hhcnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFrQixTQUFTLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBYUUsNEJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDO0lBSmhELHNCQUFhLHNDQUFNOzs7OztRQUFuQixVQUFvQixLQUErQztZQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBOzs7OztJQUlELGtDQUFLOzs7O0lBQUwsVUFBTSxNQUFzQjs7WUFDcEIsT0FBTyxHQUFHLGdCQUFhLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxrQkFBVyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsNEJBQXdCO1FBQzVHLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELGlDQUFJOzs7O0lBQUosVUFBSyxNQUFzQjs7WUFDbkIsT0FBTyxHQUFHLGdCQUFhLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxrQkFBVyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsa0JBQVcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLGVBQVEsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLFFBQUk7UUFDdkosT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ1FBQTBDO29CQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVBRLFlBQVk7Ozt5QkFXbEIsS0FBSzs7SUFnQlIseUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQW5CWSxrQkFBa0I7OztJQUM3QixtQ0FBaUI7Ozs7O0lBTUwsdUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpbmVDYXJ0UGlsbGFyLCBMaW5lQ2hhcnQsIExpbmVDaGFydFBvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpbmUtY2hhcnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saW5lLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydENvbXBvbmVudCB7XG4gIGNoYXJ0OiBMaW5lQ2hhcnQ7XG5cbiAgQElucHV0KCkgc2V0IHBvaW50cyh2YWx1ZTogTGluZUNoYXJ0UG9pbnQ8RGF0ZSB8IG51bWJlciB8IHN0cmluZz5bXSkge1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgTGluZUNoYXJ0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIHNoYXBlKHBpbGxhcjogTGluZUNhcnRQaWxsYXIpIHtcbiAgICBjb25zdCBwb2x5Z29uID0gYHBvbHlnb24oMCAkezEwMCAtIHBpbGxhci5zdGFydFZhbHVlfSUsIDEwMCUgJHsxMDAgLSBwaWxsYXIuZW5kVmFsdWV9JSwgMTAwJSAxMDAlLCAwJSAxMDAlKWA7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShwb2x5Z29uKTtcbiAgfVxuXG4gIGxpbmUocGlsbGFyOiBMaW5lQ2FydFBpbGxhcikge1xuICAgIGNvbnN0IHBvbHlnb24gPSBgcG9seWdvbigwICR7MTAwIC0gcGlsbGFyLnN0YXJ0VmFsdWV9JSwgMTAwJSAkezEwMCAtIHBpbGxhci5lbmRWYWx1ZX0lLCAxMDAlICR7MTAyIC0gcGlsbGFyLmVuZFZhbHVlfSUsIDAgJHsxMDIgLSBwaWxsYXIuc3RhcnRWYWx1ZX0lKWA7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShwb2x5Z29uKTtcbiAgfVxuXG59XG4iXX0=