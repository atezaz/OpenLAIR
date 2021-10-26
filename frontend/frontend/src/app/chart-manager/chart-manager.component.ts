import { Component, OnInit, Input, HostListener } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-chart-manager",
  templateUrl: "./chart-manager.component.html",
  styleUrls: ["./chart-manager.component.css"],
})
export class ChartManagerComponent implements OnInit {
  dropdownItems: string[];
  referenceNumbers: string[];
  indicators = new FormControl();
  components = [];
  isSticky: boolean = false;
  unselectedIndicator = [];
  regex = /\[[0-9]+\]/; // We will check if the array contains a string in the format [XX] where X = 0-9
  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 75;
  }
  constructor() {}
  /*
    This component renders all the charts.
    Parse all the indicators from local Storage into the dropdownItems variable, referenceNumbers contains only the numbers in brackets.
    The HTML template checks if referenceNumbers includes an indicator number in brackets and renders it.
  */
  ngOnInit() {
    this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators")); //For the dropdown menu
    this.referenceNumbers = JSON.parse(
      localStorage.getItem("referenceNumbers")
    ); //To render the charts
  }

  //Selecting and unselecting charts in the drop down menu

  selectCharts(event: any, state: any) {
    if (event.isUserInput) {
      if (!event.source.selected) {
        let num = state.match(this.regex)[0]; //E.G. state = Course difficulty [77] => num = [77]
        let index = this.referenceNumbers.indexOf(num);
        this.referenceNumbers.splice(index, 1)[0];
      } else {
        let num = state.match(this.regex)[0];
        if (state.match(this.regex)[0]) {
          this.referenceNumbers.push(num); //push the reference into the referenceNumbers array after selecting it
        }
      }
    }
  }
}
