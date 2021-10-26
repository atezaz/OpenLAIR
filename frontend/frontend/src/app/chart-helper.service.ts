import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ChartHelperService {
  constructor() {}
  //Sets the indicators in the localstorage as a string
  setSettings(storageName: string, data: any) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }
}
