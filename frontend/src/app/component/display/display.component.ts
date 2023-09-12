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
  selectedActivityItems = []; //learning activities dropdown
  name = [];
  dropdownSettings: any;
  data: any;
  options = []; // learning events options
  optionsActivities = []; // learning Activities options
  AllActivities = []; // learning Activities options
  AllLearningEventsOptions = [];
  mat: any;
  Events: string;
  searchInd: string; //textbox value
  searchMat: string; //textbox value
  learningEvents = [];
  learningAct = [];
  Activities: string;
  isLoaded: boolean = false;
  LearningActivities: any;
  selectedevent: any;
  matarray: any;
  LearningEvents_mateSelect = [];
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
    private sanitizer: DomSanitizer,
  ) { }

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

  // function of fetching data from database
  fetchdata() {
    //console.log("fetchdata: ");
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data; /// complete data present in database
      let allEventActivities = data; //for pushing all the activities under selected events that are not selected Mainly for maintaing history


      for (var val of this.data) { //retrive all learning events and PUSH all to the Dropdown and below I PUSH only those WAS checked before going to Dashboard
        this.AllLearningEventsOptions.push(val["LearningEvents"]); //here it pushes all the Events
      }

      if (!(localStorage.getItem("check"))) {
        //retrive all learning Activities and PUSH all to the Dropdown for the first time
        let eventCount = Object.keys(this.data).length;
        for (let k = 0; k < eventCount; k++) {
          let activitiesCount = Object.keys(this.data[k].LearningActivities).length;
          for (let l = 0; l < activitiesCount; l++) {
            this.AllActivities.push(this.data[k].LearningActivities[l].Name);
          }
        }
      }

      this.isLoaded = true;
      //After the data is fetched, we check if the localStorage contains the check property (this is to retain the checkbox state)
      if (localStorage.getItem("check")) {
        //console.log("localStorage.getItem(): ", localStorage.getItem("check"));
        //Parse the data with the check property and loop through the indicators and see if the checked property is true
        //If it's true we push it to the ind_list and mat_list, so the selected indicators from before are displayed at the top
        this.data = JSON.parse(localStorage.getItem("check"));
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
            //console.log(data[i]["LearningActivities"][j]["indicator"]);
            for (let k = 0; k < this.data[i]["LearningActivities"][j]["indicator"].length; k++) {
              if (this.data[i]["LearningActivities"][j]["indicator"][k].checked) {
                this.ind_list.push(this.data[i]["LearningActivities"][j]["indicator"][k]["indicatorName"]);
                this.mat_list.push(this.data[i]["LearningActivities"][j]["indicator"][k]);
              }
            }
          }
        }

        // }
        // if (localStorage.getItem("check"))
        // {
        //to retrive the Checked learningEvents after coming from the Dashboard
        for (var val of this.data) {
          this.options.push(val["LearningEvents"]);
        }
        let eventCount = Object.keys(this.data).length;
        //let activitiesCount = Object.keys(this.data.LearningActivities).length;


        //to retrive the Checked learningActivities after coming from the Dashboard
        for (let k = 0; k < eventCount; k++) {
          let activitiesCount = Object.keys(this.data[k].LearningActivities).length;
          for (let l = 0; l < activitiesCount; l++) {
            this.optionsActivities.push(this.data[k].LearningActivities[l].Name);
          }
        }

        this.LearningEvents_mateSelect = this.options; //to retain the current and previous state
        this.selectedevent = this.options; // to keep the object filled becasue people can select Activity instead of Event first

        let op = this.options;
        let otherActivities = allEventActivities.filter(function (obj: any) {   //to filter out the other non selected events
          return op.includes(obj.LearningEvents);
        });

        // let Count = Object.keys(otherActivities).length;
        //   for (let k = 0; k < Count; k++) {
        //     let activityCount = Object.keys(otherActivities[k].LearningActivities).length;
        //     for (let l = 0; l < activityCount; l++) {
        //       this.AllActivities.push(otherActivities[k].LearningActivities[l].Name);
        //     }
        //   }

        this.setLearningActivities(otherActivities); //this will run for pushing all activities (into the LA Dropdown) under SelectedEvents for maintaining the history otherwise the else will run
        this.selectedActivityItems = this.optionsActivities; // first the DD will be populated with activities then these will be selected
      }
      else {
        this.setLearningActivities(this.data);
        this.LearningEvents_mateSelect = this.AllLearningEventsOptions; // to keep the object filled becasue people can select Activity instead of Event first
        this.selectedevent = this.AllLearningEventsOptions;
        this.selectedActivityItems = this.AllActivities;
      }
    });
  }

  onEventValueChange(eventValue: any) {
    this.selectedevent = eventValue;
    //console.log("onEventValueChange:", p);
    this.ind_list = [];  //empty the seleted list of indicators after event an Event change
    this.selectedActivityItems = []; //empty the seleted list of Activities after event change
    this.searchInd = ""; //empty
    this.searchMat = ""; //empty
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      //console.log("data: ", this.data);
      //  if (localStorage.getItem("check")) {this.data = JSON.parse(localStorage.getItem("check"));
      //console.log("localStorage.inside: ", JSON.parse(localStorage.getItem("check")));//  }

      this.isLoaded = true;
      //if (eventValue == "Select All") { } else {
      let event = this.data.filter(function (obj: any) {
        //console.log("inside else: ", obj.LearningEvents);
        return eventValue.includes(obj.LearningEvents);
      });
      this.setLearningActivities(event);  //to update the DD of LA

      if (eventValue != "") {
        this.data = event;
        //console.log("inside p IF: ", event);
      }
      //}
    });
  }


  /////////////// function for learning activities selection /////////////
  onActivitySelect(item: any) {
    let p = this.selectedevent;
    this.ind_list = [];  //empty the seleted list of indicators after event an Event change
    this.searchInd = ""; //empty
    this.searchMat = ""; //empty
    //console.log("item: ", item);
    //console.log("this.selectedevent: ", p);
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      //console.log("onActivitySelect: ", p);
      this.isLoaded = true;

      let event = this.data.filter(function (obj: any) {
        return p.includes(obj.LearningEvents);
      });

      this.setLearningActivities(event);

      //console.log("onActivitySelect event: ", event);

      if (p != "") {
        this.data = event;
      }


      let newArray = this.selectedActivityItems;
      this.data.filter(function (obj) {
        obj.LearningActivities = obj.LearningActivities.filter(function (obj2) {
          return newArray.includes(obj2.Name);
        });
      });
    });

  }

  onSelectAll(items: any) {
    this.onActivitySelect(items);
    //console.log("onSelectAll: ", items);
    //console.log("onSelectAll: ", this.selectedItems);
    // this.onActivitySelect(items);
  }

  checkvalue(event: any) {
    if (this.selectedActivityItems.length == 0) {
      //this.onEventValueChange(this.selectedevent);
    } else {
      let index = this.selectedActivityItems.length;
      if (index !== -1) {
        this.selectedActivityItems.splice(index, 1);
        this.onActivitySelect(this.selectedActivityItems);
      }
    }
  }

  /////////////// display learning activities ////////////////////
  setLearningActivities(events: any) {
    //console.log("setLearningActivities event: ", events);
    this.dropdownList = [];
    this.name = [];

    for (let learningEvent of events) {
      //console.log("setLearningActivities learningEvents: ", learningEvents);
      for (let entry of learningEvent.LearningActivities) {
        //console.log("setLearningActivities - entry- learningEvents.LearningActivities", entry);
        this.dropdownList.push(entry.Name);
        for (let ind1 of entry.indicator) {
          this.name.push(ind1.metrics);
        }
      }
    }
  }



  ////////////////pop up by click Indicator to show meterics ///////////
  getMeterics(indic: any) {
    this.mat = indic.metrics;
    let res = this.mat;
    this.sp = res.split(",");
    this.dialog.open(this.secondDialog);
  }





  ///////////////////   search by indicator ///////////////
  searchIndicator(search: any) {

    if (search || search == '') {
      if (this.selectedevent) {
        this.dataService.getsearchind(search).subscribe((data: data[]) => {

          let op = this.selectedevent;
          let filterNonSelEvents = data.filter(function (obj: any) {   //to filter out the other non selected events
            return op.includes(obj.LearningEvents);
          });

          this.data = filterNonSelEvents;
        });
      }
      else {
        this.dataService.getsearchind(search).subscribe((data: data[]) => {
          this.data = data;
        });
      }
    } else {
      console.log("searchIndicator: ");
    }
  }


  ///////////////////   search by metrics ///////////////
  learningEventsChangeOnSearch(search: any) {
    // if (search) {
    //   this.dataService.getsearchresult(search).subscribe((data: data[]) => {
    //     this.data = data;
    //   });
    // } else {
    //   console.log("learningEventsChangeOnSearch: ");
    //  // this.fetchdata();
    // }

    if (search || search == '') {
      if (this.selectedevent) {
        this.dataService.getsearchresult(search).subscribe((data: data[]) => {

          let op = this.selectedevent;
          let filterNonSelEvents = data.filter(function (obj: any) {   //to filter out the other non selected events
            return op.includes(obj.LearningEvents);
          });

          this.data = filterNonSelEvents;
        });
      }
      else {
        this.dataService.getsearchresult(search).subscribe((data: data[]) => {
          this.data = data;
        });
      }
    } else {
      console.log("searchMatrics: ");
    }

  }


  ////////////////// function for checkbox to select indicator   //////////////////

  Checkbox(event: any, selectInd: any) {
    this.ind = selectInd.indicatorName;
    this.met = selectInd;
    //console.log("CheckboxFun event", event);
    //console.log("CheckboxFun selectInd", selectInd);
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


  download(sList, mimeType, filename) {
    if (sList.length > 0) {
      var content = "";
      let data = sList;
      data.forEach(myFunction);

      function myFunction(item, index) {
        content += index + 1 + " Indicator Name: " + item.indicatorName + "\n\t" + "Metrics: " + item.metrics + "\n\n";
        console.log(item.indicatorName + item.metrics);
      }
      var a = document.createElement('a')
      var blob = new Blob([content], { type: mimeType })
      var url = URL.createObjectURL(blob)
      a.setAttribute('href', url)
      a.setAttribute('download', filename)
      a.click()
    } else {
      window.alert("No indicator is selected");
    }

  }


  getSelectedind = (x) => {
    if (x.length > 0) {
      const indicator: any = [];
      let data = x;
      data.forEach((element) => {
        const o = { [element.indicatorName]: element.metrics.split(",") };
        indicator.push(o);
        /// other properties and values
      });

      // Convert the text to BLOB.
      let textToBLOB = new Blob(
        [
          JSON.stringify({
            indicator: indicator,
          }),
        ],
        { type: "application/json" }
      );

      let sFileName = "indicators JSON.json"; // The file to save the data.

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
    }
    else {
      window.alert("No indicator is selected");
    }
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
    // this.router.navigate(['./display/data']);
    // location.reload();
    location.href = "/";
  }

  /*
    This function pushes all selected indicators in an array
    and stores them in localStorage, so the drop down menu in the dashboard page can display the selected indicators even after refreshing the page
    We also store the "check" property in localStorage so the check marks stay checked when the user returns to the display component
    */
  forwardIndicators = (x: any) => {
    let indicators = [];
    let indicatorReferences = [];
    let selectedLearningEvents = [];
    let p = this.selectedevent;
    let regex = /\[[0-9]+\]/;
    for (const ind of this.ind_list) {
      //console.log(this.ind_list);
      //console.log(this.options);
      if (!indicators.includes(ind)) {
        indicatorReferences.push(ind.match(regex)[0]);
        indicators.push(ind);
      }
    }

    //this.chartHelperService.setSettings("selectedLearningEvents", selectedLearningEvents);
    this.chartHelperService.setSettings("selectedIndicators", indicators);
    this.chartHelperService.setSettings("referenceNumbers", indicatorReferences);
    if (indicators.length > 0) {

      let eventList = this.data.filter(function (obj: any) {//get list of all selected Events and their acitivties for history
        return p.includes(obj.LearningEvents);
      });

      localStorage.setItem("check", JSON.stringify(eventList));
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
