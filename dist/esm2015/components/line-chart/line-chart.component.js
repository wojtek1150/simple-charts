/**
 * @fileoverview added by tsickle
 * Generated from: components/line-chart/line-chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LineChart } from '../../models/line-chart';
import { DomSanitizer } from '@angular/platform-browser';
export class LineChartComponent {
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
    set points(value) {
        this.chart = new LineChart(value);
    }
    /**
     * @param {?} pillar
     * @return {?}
     */
    shape(pillar) {
        /** @type {?} */
        const polygon = `polygon(0 ${100 - pillar.startValue}%, 100% ${100 - pillar.endValue}%, 100% 100%, 0% 100%)`;
        return this.sanitizer.bypassSecurityTrustStyle(polygon);
    }
    /**
     * @param {?} pillar
     * @return {?}
     */
    line(pillar) {
        /** @type {?} */
        const polygon = `polygon(0 ${100 - pillar.startValue}%, 100% ${100 - pillar.endValue}%, 100% ${102 - pillar.endValue}%, 0 ${102 - pillar.startValue}%)`;
        return this.sanitizer.bypassSecurityTrustStyle(polygon);
    }
}
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-line-chart',
                template: "<div class=\"pillar\" *ngFor=\"let pillar of chart.pillars\" [style.width]=\"pillar.width + '%'\">\n  <div class=\"clip-path\" [style.clip-path]=\"shape(pillar)\"></div>\n  <div class=\"line\" [style.clip-path]=\"line(pillar)\"></div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(.1em,rgba(255,255,255,.07)),color-stop(.1em,transparent)),-webkit-gradient(linear,left top,right top,color-stop(.1em,rgba(255,255,255,.07)),color-stop(.1em,transparent));background-image:linear-gradient(rgba(255,255,255,.07) .1em,transparent .1em),linear-gradient(90deg,rgba(255,255,255,.07) .1em,transparent .1em);background-size:1em 1em;box-sizing:border-box;display:-webkit-box;display:flex;height:200px;width:100%}:host .pillar{box-sizing:border-box;height:100%;position:relative}:host .clip-path{background:-webkit-gradient(linear,left top,left bottom,from(white),color-stop(50%,rgba(255,255,255,.4)),to(rgba(255,255,255,0)));background:linear-gradient(180deg,#fff 0,rgba(255,255,255,.4) 50%,rgba(255,255,255,0) 100%);height:100%;position:relative;-webkit-transition:-webkit-clip-path .3s ease-in-out;transition:clip-path .3s ease-in-out;transition:clip-path .3s ease-in-out,-webkit-clip-path .3s ease-in-out;width:100%;z-index:1}:host .line{background:#fff;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
LineChartComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
LineChartComponent.propDecorators = {
    points: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LineChartComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    LineChartComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad29qdGVrMTE1MC9zaW1wbGUtY2hhcnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFrQixTQUFTLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBUXpELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFPN0IsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFJLENBQUM7Ozs7O0lBSmhELElBQWEsTUFBTSxDQUFDLEtBQStDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFJRCxLQUFLLENBQUMsTUFBc0I7O2NBQ3BCLE9BQU8sR0FBRyxhQUFhLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxXQUFXLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSx3QkFBd0I7UUFDNUcsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQXNCOztjQUNuQixPQUFPLEdBQUcsYUFBYSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsV0FBVyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsV0FBVyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsUUFBUSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSTtRQUN2SixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixnUUFBMEM7Z0JBRTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVBRLFlBQVk7OztxQkFXbEIsS0FBSzs7OztJQUZOLG1DQUFpQjs7Ozs7SUFNTCx1Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGluZUNhcnRQaWxsYXIsIExpbmVDaGFydCwgTGluZUNoYXJ0UG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGluZS1jaGFydCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IHtcbiAgY2hhcnQ6IExpbmVDaGFydDtcblxuICBASW5wdXQoKSBzZXQgcG9pbnRzKHZhbHVlOiBMaW5lQ2hhcnRQb2ludDxEYXRlIHwgbnVtYmVyIHwgc3RyaW5nPltdKSB7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBMaW5lQ2hhcnQodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgc2hhcGUocGlsbGFyOiBMaW5lQ2FydFBpbGxhcikge1xuICAgIGNvbnN0IHBvbHlnb24gPSBgcG9seWdvbigwICR7MTAwIC0gcGlsbGFyLnN0YXJ0VmFsdWV9JSwgMTAwJSAkezEwMCAtIHBpbGxhci5lbmRWYWx1ZX0lLCAxMDAlIDEwMCUsIDAlIDEwMCUpYDtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHBvbHlnb24pO1xuICB9XG5cbiAgbGluZShwaWxsYXI6IExpbmVDYXJ0UGlsbGFyKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IGBwb2x5Z29uKDAgJHsxMDAgLSBwaWxsYXIuc3RhcnRWYWx1ZX0lLCAxMDAlICR7MTAwIC0gcGlsbGFyLmVuZFZhbHVlfSUsIDEwMCUgJHsxMDIgLSBwaWxsYXIuZW5kVmFsdWV9JSwgMCAkezEwMiAtIHBpbGxhci5zdGFydFZhbHVlfSUpYDtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHBvbHlnb24pO1xuICB9XG5cbn1cbiJdfQ==