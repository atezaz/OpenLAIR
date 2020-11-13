import { Component, OnInit,ViewChild,TemplateRef } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "@angular/router";
import { data } from "../../data.model";
import { MatSnackBar } from "@angular/material";
import {MatDialog} from '@angular/material/dialog';
import { NgModel } from '@angular/forms';



@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent implements OnInit {
 

  @ViewChild('secondDialog', { static: true }) secondDialog: any;
  dropdownList = [];
  selectedItems = [];
  name=[];
  dropdownSettings: any;
  data: any;
  options   = [];
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
  sp: any[] ;
  constructor(
    private dataService: DataService,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog:MatDialog
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
  onItemSelect(item: any) {
    
    let p = this.selectedevent;
    console.log(item);
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      

      this.isLoaded = true;
      let event = this.data.filter(function (obj) {
        return p.includes(obj.LearningEvents);
      });

      // this.setLearningActivities(event);
      

      if (p! = "") {
        this.data = event;
        
      }
      let newArray = this.selectedItems;
      console.log(newArray)
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
       
        this.options.push(val['LearningEvents']);
        
       
      }
      this.selected.push(this.options)
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
        // this.setLearningActivities(event);

        if (p != "") {
          this.data = event;
          
        }
      }
    });
  }
  
  /////////////// display learning activities ////////////////////
  setLearningActivities(data: any) {
    this.dropdownList = [];
    this.name=[];
    for (let learningEvents of data) {
      for (let entry of learningEvents.LearningActivities) {
        
        this.dropdownList.push(entry.Name);
        for (let ind1 of entry.indicator) {
          this.name.push(ind1.metrics)
                  
       }
        
      }
    }
    // console.log(this.name)
  }


  learningEventsChangeOnSearch(search: any) {
    if(search){
      this.dataService.getsearchresult(search).subscribe((data: data[]) => {
        this.data = data;
        console.log(this.data);
      });
    }else{
      this.fetchdata();
    }
  
    
  }
  checkvalue(event : any){
    if(this.selectedItems.length == 0){
      this.fetchdata();
    }
  }
  
  
 }
