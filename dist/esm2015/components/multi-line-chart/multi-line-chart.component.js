/**
 * @fileoverview added by tsickle
 * Generated from: components/multi-line-chart/multi-line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MultiLineChart } from '../../models/multi-line-chart';
export class MultiLineChartComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this.chart = new MultiLineChart(value);
        console.log('MultiLineChartComponent', value, this.chart);
    }
    /**
     * @param {?} pillar
     * @return {?}
     */
    segmentPath(pillar) {
        /** @type {?} */
        const polygon = `polygon(0 ${100 - pillar.shapeStart}%, 100% ${100 - pillar.shapeEnd}%, 100% ${101 - pillar.shapeEnd}%, 0 ${101 - pillar.shapeStart}%)`;
        return this.sanitizer.bypassSecurityTrustStyle(polygon);
    }
    /**
     * @param {?} pillar
     * @return {?}
     */
    dotLocation(pillar) {
        return this.sanitizer.bypassSecurityTrustStyle(`${pillar.shapeEnd}%`);
    }
}
MultiLineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-multi-line-chart',
                template: "<div class=\"chart\">\n\n  <div class=\"left axis-y\">\n    <span *ngFor=\"let y of chart.scaleY\">{{y}}</span>\n  </div>\n\n  <div class=\"lines\">\n    <div class=\"line\" *ngFor=\"let line of chart.lines\">\n\n      <div class=\"segment {{line.lineType}}\" *ngFor=\"let pillar of line.items\">\n        <div class=\"shape\" [style.clip-path]=\"segmentPath(pillar)\"></div>\n        <div class=\"dot\" [style.bottom]=\"dotLocation(pillar)\">\n          <span>{{pillar.y}}{{line.valueType === 'percents' ? '%' : ''}}</span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"column\" *ngFor=\"let x of chart.scaleX\">\n        <div class=\"row\" *ngFor=\"let y of chart.scaleY\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"right axis-y\">\n    <span>100%</span>\n    <span>75%</span>\n    <span>50%</span>\n    <span>25%</span>\n  </div>\n\n  <div class=\"axis-x\">\n    <span>&nbsp;</span>\n    <span *ngFor=\"let x of chart.scaleX\">{{x}}</span>\n  </div>\n\n</div>\n\n<div class=\"legend\">\n  <div class=\"item\" *ngFor=\"let line of chart.lines\">\n    <div class=\"icon {{line.lineType}}\"></div>\n    {{line.label}}\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{background:#4266e3;border-radius:5px;color:#fff;display:block;margin:10px 0}.chart{display:-ms-grid;display:grid;font-size:12px;-ms-grid-columns:40px auto 45px;grid-template-columns:40px auto 45px}.chart .axis-y{display:-ms-grid;display:grid;padding-top:10px}.chart .axis-y.left{-ms-grid-rows:33% 32% 32%;grid-template-rows:33% 32% 32%;padding-left:12px}.chart .axis-y.right{-ms-grid-rows:24% 25% 25% 26%;grid-template-rows:24% 25% 25% 26%;padding-left:5px}.chart .axis-x{display:-webkit-box;display:flex;-ms-grid-column:2;grid-column:2;-webkit-box-pack:justify;justify-content:space-between;margin:10px -2px 15px 0;text-align:center}.lines{border-bottom:1px solid rgba(255,255,255,.7);border-left:1px solid rgba(255,255,255,.7);box-sizing:border-box;display:block;height:175px;position:relative;width:100%}.grid,.line{bottom:0;display:-webkit-box;display:flex;-webkit-box-pack:stretch;justify-content:stretch;left:0;position:absolute;right:0}.line{top:20px;z-index:1}.grid{top:0;z-index:0}.grid .column{border-right:1px solid rgba(255,255,255,.2);display:-ms-grid;display:grid;-webkit-box-flex:1;flex:1;-ms-grid-rows:(1fr)[3];grid-template-rows:repeat(3,1fr);padding-top:20px}.grid .column .row{border-top:1px solid rgba(255,255,255,.2)}.segment{box-sizing:border-box;display:block;-webkit-box-flex:1;flex:1;height:100%;position:relative}.segment .shape{height:100%;position:absolute;width:100%}.segment .dot{background:#6dd5b4;border-radius:50%;cursor:pointer;display:block;height:8px;position:absolute;right:0;-webkit-transform:translate(50%,50%);transform:translate(50%,50%);visibility:hidden;width:8px;z-index:2}.segment .dot span{background:#222;border-radius:3px;display:block;font-size:10px;left:50%;opacity:0;padding:3px 6px;position:absolute;-webkit-transform:translate(-50%,-120%);transform:translate(-50%,-120%);-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;z-index:3}.segment .dot:hover span{opacity:1}.segment.normal .shape{background:rgba(255,255,255,.6)}.segment.points .shape{background:#6dd5b4}.segment.points .dot{visibility:visible}.segment.dashed .shape{background-image:-webkit-gradient(linear,left top,right top,color-stop(50%,#fff),color-stop(50%,transparent));background-image:linear-gradient(to right,#fff 50%,transparent 50%);background-repeat:repeat;background-size:3px 100%}.legend{display:-webkit-box;display:flex;font-size:11px;-webkit-box-pack:justify;justify-content:space-between}.legend .item{display:-ms-grid;display:grid;-ms-grid-columns:25px auto;grid-template-columns:25px auto;padding:5px}.legend .icon{height:1px;margin-top:8px;position:relative;width:17px}.legend .icon.normal{background:rgba(255,255,255,.6)}.legend .icon.dashed{border-bottom:1px dashed #fff}.legend .icon.points{background:#6dd5b4}.legend .icon.points::after{background:#6dd5b4;border-radius:50%;content:\"\";display:block;height:7px;left:5px;position:absolute;top:-3px;width:7px}"]
            }] }
];
/** @nocollapse */
MultiLineChartComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
MultiLineChartComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MultiLineChartComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    MultiLineChartComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktbGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad29qdGVrMTE1MC9zaW1wbGUtY2hhcnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9tdWx0aS1saW5lLWNoYXJ0L211bHRpLWxpbmUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQWlELE1BQU0sK0JBQStCLENBQUM7QUFROUcsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVFsQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQzs7Ozs7SUFMaEQsSUFBYSxJQUFJLENBQUMsS0FBZ0M7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFJRCxXQUFXLENBQUMsTUFBNEI7O2NBQ2hDLE9BQU8sR0FBRyxhQUFhLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxXQUFXLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxXQUFXLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxRQUFRLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJO1FBQ3ZKLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUE0QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDZyQ0FBZ0Q7Z0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVJRLFlBQVk7OzttQkFZbEIsS0FBSzs7OztJQUZOLHdDQUFzQjs7Ozs7SUFPViw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNdWx0aUxpbmVDaGFydCwgTXVsdGlMaW5lQ2hhcnRMaW5lSW5wdXQsIE11bHRpTGluZUNoYXJ0UGlsbGFyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL211bHRpLWxpbmUtY2hhcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXVsdGktbGluZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1saW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXVsdGktbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUxpbmVDaGFydENvbXBvbmVudCB7XG4gIGNoYXJ0OiBNdWx0aUxpbmVDaGFydDtcblxuICBASW5wdXQoKSBzZXQgZGF0YSh2YWx1ZTogTXVsdGlMaW5lQ2hhcnRMaW5lSW5wdXRbXSkge1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgTXVsdGlMaW5lQ2hhcnQodmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdNdWx0aUxpbmVDaGFydENvbXBvbmVudCcsIHZhbHVlLCB0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIHNlZ21lbnRQYXRoKHBpbGxhcjogTXVsdGlMaW5lQ2hhcnRQaWxsYXIpIHtcbiAgICBjb25zdCBwb2x5Z29uID0gYHBvbHlnb24oMCAkezEwMCAtIHBpbGxhci5zaGFwZVN0YXJ0fSUsIDEwMCUgJHsxMDAgLSBwaWxsYXIuc2hhcGVFbmR9JSwgMTAwJSAkezEwMSAtIHBpbGxhci5zaGFwZUVuZH0lLCAwICR7MTAxIC0gcGlsbGFyLnNoYXBlU3RhcnR9JSlgO1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUocG9seWdvbik7XG4gIH1cblxuICBkb3RMb2NhdGlvbihwaWxsYXI6IE11bHRpTGluZUNoYXJ0UGlsbGFyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgJHtwaWxsYXIuc2hhcGVFbmR9JWApO1xuICB9XG5cbn1cbiJdfQ==