/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DataService } from './multiselect.service';
export class ListFilterPipe {
    /**
     * @param {?} ds
     */
    constructor(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    transform(items, filter, searchBy) {
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.applyFilter(item, filter, searchBy)));
        this.ds.setData(this.filteredList);
        return this.filteredList;
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    applyFilter(item, filter, searchBy) {
        /** @type {?} */
        let found = false;
        if (searchBy.length > 0) {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var t = 0; t < searchBy.length; t++) {
                    if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                        if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        else {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var prop in item) {
                    if (filter && item[prop]) {
                        if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        return found;
    }
}
ListFilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'listFilter',
                pure: true
            },] }
];
/** @nocollapse */
ListFilterPipe.ctorParameters = () => [
    { type: DataService }
];
if (false) {
    /** @type {?} */
    ListFilterPipe.prototype.filteredList;
    /**
     * @type {?}
     * @private
     */
    ListFilterPipe.prototype.ds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1tdWx0aXNlbGVjdC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbImxpYi9saXN0LWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT3BELE1BQU0sT0FBTyxjQUFjOzs7O0lBR3ZCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRDVCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO0lBRzlCLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLE1BQVcsRUFBRSxRQUFhO1FBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7Ozs7OztJQUNELFdBQVcsQ0FBQyxJQUFTLEVBQUUsTUFBVyxFQUFFLFFBQWE7O1lBQ3pDLEtBQUssR0FBRyxLQUFLO1FBQ2pCLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7aUJBQ0k7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUN4RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUMvRSxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUNoQjtxQkFDSjtpQkFDSjthQUNKO1NBRUo7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO2lCQUNJO2dCQUNELEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNuQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3hFLEtBQUssR0FBRyxJQUFJLENBQUM7eUJBQ2hCO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7OztZQXBESixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxJQUFJO2FBQ2I7Ozs7WUFOUSxXQUFXOzs7O0lBU2hCLHNDQUE4Qjs7Ozs7SUFDbEIsNEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL211bHRpc2VsZWN0LnNlcnZpY2UnO1xuXG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbGlzdEZpbHRlcicsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgcHVibGljIGZpbHRlcmVkTGlzdDogYW55ID0gW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkczogRGF0YVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIHRyYW5zZm9ybShpdGVtczogYW55W10sIGZpbHRlcjogYW55LCBzZWFyY2hCeTogYW55KTogYW55W10ge1xuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZHMuc2V0RGF0YShpdGVtcyk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBpdGVtcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gdGhpcy5hcHBseUZpbHRlcihpdGVtLCBmaWx0ZXIsIHNlYXJjaEJ5KSk7XG4gICAgICAgIHRoaXMuZHMuc2V0RGF0YSh0aGlzLmZpbHRlcmVkTGlzdCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkTGlzdDtcbiAgICB9XG4gICAgYXBwbHlGaWx0ZXIoaXRlbTogYW55LCBmaWx0ZXI6IGFueSwgc2VhcmNoQnk6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHNlYXJjaEJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmdycFRpdGxlKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBzZWFyY2hCeS5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyICYmIGl0ZW1bc2VhcmNoQnlbdF1dICYmIGl0ZW1bc2VhcmNoQnlbdF1dICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3NlYXJjaEJ5W3RdXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZ3JwVGl0bGUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlciAmJiBpdGVtW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtwcm9wXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG59Il19