import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "@angular/router";
import { data } from "../../data.model";
import { MatSnackBar } from "@angular/material";
import { MatDialog } from "@angular/material/dialog";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
  @ViewChild("secondDialog", { static: true }) secondDialog: any;
  dropdownList = [];
  selectedItems = [];
  name = [];
  dropdownSettings: any;
  data: any;
  options = [];
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
  met:any;
  mat_list = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchdata();

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
    let p = this.selectedevent;
    // console.log(item);
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
      // console.log(this.selectedItems);
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
      for (var val of this.data) {
        this.options.push(val["LearningEvents"]);
      }
      this.selected.push(this.options);
      this.learningValueChange("Select All");
      this.setLearningActivities(this.data);
      //this.setLearningActivities(this.data )
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
      this.isLoaded = true;
      if (p == "Select All") {
      } else {
        let event = this.data.filter(function (obj) {
          return p.includes(obj.LearningEvents);
        });
         this.setLearningActivities(event);
        //  console.log(event )

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
    // console.log(this.name)
  }

  ///////////////////   search by metrics ///////////////
  learningEventsChangeOnSearch(search: any) {
    if (search) {
      this.dataService.getsearchresult(search).subscribe((data: data[]) => {
        this.data = data;
        // console.log(this.data);
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
        console.log(this.data);
      });
    } else {
      this.fetchdata();
    }
  }
  checkvalue(event: any) {
    if (this.selectedItems.length == 0) {
      console.log(event)
      this.fetchdata();
    }
  }

  ////////////////// function for checkbox to select indicator indicator  //////////////////
  Checkbox(event, selectInd) {
    this.ind = selectInd.indicatorName;
    this.met = selectInd;
   // console.log(selectInd)

    if (event.target.checked) {
      this.ind_list.push(this.ind);
      this.mat_list.push(this.met);
      
    } else {
      let index = this.ind_list.indexOf(this.ind);
      let index1 = this.mat_list.indexOf(this.met);
    
      if (index !== -1) {
        this.ind_list.splice(index, 1);
        this.mat_list.splice(index1, 1);
      }
    }
  }

 
  getSelectedind = (x) => {
    let data = x;

    // Convert the text to BLOB.
    let textToBLOB = new Blob([JSON.stringify(data)], {type : 'application/json'});
   
    let sFileName = "indicator.json"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (textToBLOB.size == 2) {
      
      window.alert("No indicator is selected");
      
    } else if ((window as any).webkitURL != null) {
      newLink.href = (window as any).webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      // document.body.appendChild(newLink);
    }

    newLink.click();
  };
}
