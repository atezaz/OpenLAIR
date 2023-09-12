import { Observable } from 'rxjs';
export declare class DataService {
    filteredData: any;
    private subject;
    setData(data: any): void;
    getData(): Observable<any>;
    getFilteredData(): any;
}
