(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('highcharts-angular', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['highcharts-angular'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var HighchartsChartComponent = /** @class */ (function () {
        function HighchartsChartComponent(el, _zone // #75
        ) {
            this.el = el;
            this._zone = _zone;
            this.updateChange = new core.EventEmitter(true);
            this.chartInstance = new core.EventEmitter(); // #26
        }
        HighchartsChartComponent.prototype.ngOnChanges = function (changes) {
            var update = changes.update && changes.update.currentValue;
            if (changes.options || update) {
                this.wrappedUpdateOrCreateChart();
                if (update) {
                    this.updateChange.emit(false); // clear the flag after update
                }
            }
        };
        HighchartsChartComponent.prototype.wrappedUpdateOrCreateChart = function () {
            var _this = this;
            if (this.runOutsideAngular) {
                this._zone.runOutsideAngular(function () {
                    _this.updateOrCreateChart();
                });
            }
            else {
                this.updateOrCreateChart();
            }
        };
        HighchartsChartComponent.prototype.updateOrCreateChart = function () {
            if (this.chart && this.chart.update) {
                this.chart.update(this.options, true, this.oneToOne || false);
            }
            else {
                this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.options, this.callbackFunction || null);
                // emit chart instance on init
                this.chartInstance.emit(this.chart);
            }
        };
        HighchartsChartComponent.prototype.ngOnDestroy = function () {
            if (this.chart) { // #56
                this.chart.destroy();
                this.chart = null;
            }
        };
        return HighchartsChartComponent;
    }());
    HighchartsChartComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'highcharts-chart',
                    template: ''
                },] }
    ];
    HighchartsChartComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    HighchartsChartComponent.propDecorators = {
        Highcharts: [{ type: core.Input }],
        constructorType: [{ type: core.Input }],
        callbackFunction: [{ type: core.Input }],
        oneToOne: [{ type: core.Input }],
        runOutsideAngular: [{ type: core.Input }],
        options: [{ type: core.Input }],
        update: [{ type: core.Input }],
        updateChange: [{ type: core.Output }],
        chartInstance: [{ type: core.Output }]
    };

    var HighchartsChartModule = /** @class */ (function () {
        function HighchartsChartModule() {
        }
        return HighchartsChartModule;
    }());
    HighchartsChartModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [HighchartsChartComponent],
                    exports: [HighchartsChartComponent]
                },] }
    ];

    /*
     * Public API Surface of highcharts-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HighchartsChartComponent = HighchartsChartComponent;
    exports.HighchartsChartModule = HighchartsChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=highcharts-angular.umd.js.map
