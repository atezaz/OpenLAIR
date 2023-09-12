/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DataService {
    constructor() {
        this.filteredData = [];
        this.subject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.filteredData = data;
        this.subject.next(data);
    }
    /**
     * @return {?}
     */
    getData() {
        return this.subject.asObservable();
    }
    /**
     * @return {?}
     */
    getFilteredData() {
        if (this.filteredData && this.filteredData.length > 0) {
            return this.filteredData;
        }
        else {
            return [];
        }
    }
}
DataService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DataService.prototype.filteredData;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLW11bHRpc2VsZWN0LWRyb3Bkb3duLyIsInNvdXJjZXMiOlsibGliL211bHRpc2VsZWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzQyxNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUdFLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFtQnZDLENBQUM7Ozs7O0lBakJDLE9BQU8sQ0FBQyxJQUFTO1FBRWYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUNELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjthQUNJO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7OztZQXJCRixVQUFVOzs7O0lBR1QsbUNBQXVCOzs7OztJQUN2Qiw4QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuICBmaWx0ZXJlZERhdGE6IGFueSA9IFtdO1xuICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgc2V0RGF0YShkYXRhOiBhbnkpIHtcblxuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gZGF0YTtcbiAgICB0aGlzLnN1YmplY3QubmV4dChkYXRhKTtcbiAgfVxuICBnZXREYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBnZXRGaWx0ZXJlZERhdGEoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhICYmIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkRGF0YTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbn0iXX0=