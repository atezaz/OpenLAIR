/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService() {
        this.filteredData = [];
        this.subject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DataService.prototype.setData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.filteredData = data;
        this.subject.next(data);
    };
    /**
     * @return {?}
     */
    DataService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    /**
     * @return {?}
     */
    DataService.prototype.getFilteredData = /**
     * @return {?}
     */
    function () {
        if (this.filteredData && this.filteredData.length > 0) {
            return this.filteredData;
        }
        else {
            return [];
        }
    };
    DataService.decorators = [
        { type: Injectable }
    ];
    return DataService;
}());
export { DataService };
if (false) {
    /** @type {?} */
    DataService.prototype.filteredData;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLW11bHRpc2VsZWN0LWRyb3Bkb3duLyIsInNvdXJjZXMiOlsibGliL211bHRpc2VsZWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczQztJQUFBO1FBR0UsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQW1CdkMsQ0FBQzs7Ozs7SUFqQkMsNkJBQU87Ozs7SUFBUCxVQUFRLElBQVM7UUFFZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsNkJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDRCxxQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjthQUNJO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7O2dCQXJCRixVQUFVOztJQXVCWCxrQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLFdBQVc7OztJQUV0QixtQ0FBdUI7Ozs7O0lBQ3ZCLDhCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gIGZpbHRlcmVkRGF0YTogYW55ID0gW107XG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBzZXREYXRhKGRhdGE6IGFueSkge1xuXG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSBkYXRhO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KGRhdGEpO1xuICB9XG4gIGdldERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGdldEZpbHRlcmVkRGF0YSgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJlZERhdGEgJiYgdGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWREYXRhO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxufSJdfQ==