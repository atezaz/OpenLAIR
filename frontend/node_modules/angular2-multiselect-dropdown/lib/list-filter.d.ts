import { PipeTransform } from '@angular/core';
import { DataService } from './multiselect.service';
export declare class ListFilterPipe implements PipeTransform {
    private ds;
    filteredList: any;
    constructor(ds: DataService);
    transform(items: any[], filter: any, searchBy: any): any[];
    applyFilter(item: any, filter: any, searchBy: any): boolean;
}
