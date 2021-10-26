import {
  Component,
  OnInit,
  ViewChild,
  QueryList,
  ViewChildren,
  ElementRef,
  TemplateRef,
  Pipe,
  PipeTransform,
} from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "@angular/router";
import { data } from "../../data.model";
import { MatSnackBar } from "@angular/material";
import { MatDialog } from "@angular/material/dialog";
import { NgModel } from "@angular/forms";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { element } from "protractor";
import { ChartHelperService } from "src/app/chart-helper.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
  @ViewChild("secondDialog", { static: true }) secondDialog: any;
  dropdownList = []; //learning activities dropdown
  selectedItems = []; //learning activities dropdown
  name = [];
  dropdownSettings: any;
  data: any;
  options = []; // learning events options
  mat: any;
  Events: string;
  learningEvents = [];
  learningAct = [];
  Activities: string;
  isLoaded: boolean = false;
  LearningActivities: any;
  selectedevent: any;
  matarray: any;
  selected = [];
  selectionModel: NgModel;
  sp: any[];
  ind: any;
  id: any;
  ind_list = [];
  met: any;
  mat_list = [];
  element = document.getElementById("header");

  constructor(
    private dataService: DataService,
    private chartHelperService: ChartHelperService,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.fetchdata();
    this.loadScript();
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  /////////////// function for learning activities selection /////////////

  onItemSelect(item: any) {
    //console.log(item);
    let p = this.selectedevent;
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;

      this.isLoaded = true;
      let event = this.data.filter(function (obj) {
        return p.includes(obj.LearningEvents);
      });

      this.setLearningActivities(event);

      if ((p! = "")) {
        this.data = event;
      }
      let newArray = this.selectedItems;
      this.data.filter(function (obj) {
        obj.LearningActivities = obj.LearningActivities.filter(function (obj2) {
          return newArray.includes(obj2.Name);
        });
      });
    });
  }
  onSelectAll(items: any) {
    this.learningValueChange(this.selectedevent);
  }

  // function of fetching data from database
  fetchdata() {
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data; /// complete data present in database

      this.isLoaded = true;

      //After the data is fetched, we check if the localStorage contains the check property (this is to retain the checkbox state)
      if (localStorage.getItem("check")) {
        //Parse the data with the check property and loop through the indicators and see if the checked property is true
        //If it's true we push it to the ind_list and mat_list, so the selected indicators from before are displayed at the top
        this.data = JSON.parse(localStorage.getItem("check"));
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
            //  console.log(data[i]["LearningActivities"][j]["indicator"]);
            for (
              let k = 0;
              k < this.data[i]["LearningActivities"][j]["indicator"].length;
              k++
            ) {
              if (
                this.data[i]["LearningActivities"][j]["indicator"][k].checked
              ) {
                this.ind_list.push(
                  this.data[i]["LearningActivities"][j]["indicator"][k][
                    "indicatorName"
                  ]
                );
                this.mat_list.push(
                  this.data[i]["LearningActivities"][j]["indicator"][k]
                );
              }
            }
          }
        }
      }

      for (var val of this.data) {
        this.options.push(val["LearningEvents"]);
      }
      this.selected.push(this.options);
      this.learningValueChange("Select All");
      this.setLearningActivities(this.data);
    });
  }
  ////////////////pop up by click Indicator to show meterics ///////////
  getMeterics(indic: any) {
    this.mat = indic.metrics;
    let res = this.mat;
    this.sp = res.split(",");
    this.dialog.open(this.secondDialog);
  }

  learningValueChange(p) {
    this.selectedevent = p;
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      if (localStorage.getItem("check")) {
        this.data = JSON.parse(localStorage.getItem("check"));
      }
      this.isLoaded = true;
      if (p == "Select All") {
      } else {
        let event = this.data.filter(function (obj) {
          return p.includes(obj.LearningEvents);
        });
        this.setLearningActivities(event);

        if (p != "") {
          this.data = event;
        }
      }
    });
  }

  /////////////// display learning activities ////////////////////
  setLearningActivities(events: any) {
    this.dropdownList = [];
    this.name = [];
    for (let learningEvents of events) {
      for (let entry of learningEvents.LearningActivities) {
        this.dropdownList.push(entry.Name);
        for (let ind1 of entry.indicator) {
          this.name.push(ind1.metrics);
        }
      }
    }
  }

  ///////////////////   search by metrics ///////////////

  learningEventsChangeOnSearch(search: any) {
    if (search) {
      this.dataService.getsearchresult(search).subscribe((data: data[]) => {
        this.data = data;
      });
    } else {
      this.fetchdata();
    }
  }
  ///////////////////   search by indicator ///////////////
  searchIndicator(search: any) {
    if (search) {
      this.dataService.getsearchind(search).subscribe((data: data[]) => {
        this.data = data;
      });
    } else {
      this.fetchdata();
    }
  }

  /////////////

  // transform(value: any, args: any): any {
  //   if (!args) {
  //     return value;
  //   }
  //   // Match in a case insensitive maneer
  //   const re = new RegExp(args, 'gi');
  //   const match = value.match(re);

  //   // If there's no match, just return the original value.
  //   if (!match) {
  //     return value;
  //   }

  //   const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
  //   return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
  // }

  // searchTerm: string;
  // updateSearch(e) {
  //   this.searchTerm = e.target.value
  // }

  checkvalue(event: any) {
    if (this.selectedItems.length == 0) {
      this.learningValueChange(this.selectedevent);
    } else {
      let index = this.selectedItems.length;
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
        this.onItemSelect(this.selectedItems);
      }
    }
  }

  ////////////////// function for checkbox to select indicator   //////////////////

  Checkbox(event: any, selectInd: any) {
    this.ind = selectInd.indicatorName;
    this.met = selectInd;

    if (event.target.checked) {
      //Set the checked property to true and store it in localStorage so the checkboxes stay checked after reload
      selectInd.checked = true;
      localStorage.setItem("check", JSON.stringify(this.data));
      this.ind_list.push(this.ind);
      this.mat_list.push(this.met);
    } else {
      let index = this.ind_list.indexOf(this.ind);
      //Set checked to false and reset the localStorage values to keep it updated
      selectInd.checked = false;
      localStorage.setItem("check", JSON.stringify(this.data));
      let index1 = this.mat_list.indexOf(this.met);

      if (index !== -1) {
        this.ind_list.splice(index, 1);
        this.mat_list.splice(index1, 1);
      }
    }
  }

  getSelectedind = (x) => {
    const indicator: any = [];
    let data = x;

    //printing senario

    console.log(
      "For your particular senario your learning objective(s) is/are ",
      this.selectedevent[0]
    );
    console.log("The learning activities are ", this.selectedItems[0]);
    console.log("The possible indicators are ", data[0].indicatorName);
    console.log("and there metrics are ", data[0].metrics);

    data.forEach((element) => {
      const o = { [element.indicatorName]: element.metrics.split(",") };

      indicator.push(o);

      /// other properties and values
    });

    //console.log(indicator);

    // console.log(new_obj);
    //     let json_string=JSON.stringify(new_obj);

    //     let array2 = JSON.parse("[" +  json_string + "]");
    //    console.log(array2);

    // Convert the text to BLOB.
    let textToBLOB = new Blob(
      [
        JSON.stringify({
          indicator: indicator,
        }),
      ],
      { type: "application/json" }
    );

    let sFileName = "indicators.json"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if ((window as any).webkitURL != null) {
      newLink.href = (window as any).webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      // document.body.appendChild(newLink);
    }

    newLink.click();
  };
  reset() {
    this.ind_list = [];
    this.mat_list = [];
    //When the user presses the reset-button the "checked" property of the indicators have to be set to false and the check property in the localstorage is removed
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
        //  console.log(data[i]["LearningActivities"][j]["indicator"]);
        for (
          let k = 0;
          k < this.data[i]["LearningActivities"][j]["indicator"].length;
          k++
        ) {
          this.data[i]["LearningActivities"][j]["indicator"][k].checked = false;
        }
      }
    }
    localStorage.removeItem("check");
    this.uncheckAll();
  }

  /*
    This function pushes all selected indicators in an array
    and stores them in localStorage, so the drop down menu in the dashboard page can display the selected indicators even after refreshing the page
    We also store the "check" property in localStorage so the check marks stay checked when the user returns to the display component
  */
  forwardIndicators = (x) => {
    let indicators = [];
    let indicatorReferences = [];
    let regex = /\[[0-9]+\]/;
    for (const ind of this.ind_list) {
      if (!indicators.includes(ind)) {
        indicatorReferences.push(ind.match(regex)[0]);
        indicators.push(ind);
      }
    }

    this.chartHelperService.setSettings("selectedIndicators", indicators);
    this.chartHelperService.setSettings(
      "referenceNumbers",
      indicatorReferences
    );
    if (indicators.length > 0) {
      localStorage.setItem("check", JSON.stringify(this.data));
      this.router.navigate(["/dashboard"]);
    } else {
      window.alert("No indicator is selected");
    }
  };

  backToTop() {
    this.element.scrollIntoView({ behavior: "smooth" });
  }

  //will solve the issue of comming back from another page
  loadScript() {
    let node = document.createElement("script"); // create script tag
    node.src = "assets/js/tooltipJS.js"; // set source
    node.type = "text/javascript";
    node.async = true; // makes script run asynchronously
    node.charset = "utf-8";
    // append to head of document
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  @ViewChildren("indicatorCheckbox") indicatorCheckboxs: QueryList<ElementRef>;
  uncheckAll() {
    this.indicatorCheckboxs.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
}
