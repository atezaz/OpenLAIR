import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { data } from '../../data.model';
import { FormControl, FormGroup, FormBuilder, FormArray, Validator, Validators } from '@angular/forms';
import { color } from 'highcharts';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})


export class AddDataComponent implements OnInit {

  public dataEntryForm: FormGroup;
  public indicator: FormArray;


  filterResult: any;
  actName: any;
  options = [];
  data: any;
  selected = [];
  dropdownList = [];
  selectedevent: any;
  CUserName: any;
  similarActivityMessage: any;
  successfulMessage: any;
  selectedItems = [];
  fileToUpload: File = null;
  pdfSrc: string;
  file: any;
  currentFile: any;
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {


    if(localStorage.getItem('currentUser')){
      this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
    }

    
    //// form entries///////
    this.dataEntryForm = this.fb.group({
      learningEvents: ["", Validators.required],
      learningActivities: ["", Validators.required],
      indicator: this.fb.array([this.createIndicator()])
    });
  }

  ngOnInit() {
    this.fetchdata();
  }

  get indicatorControls() {
    return this.dataEntryForm.get('indicator')['controls'];
  }

  /// adding new indicator and meterics entry/////////// 
  createIndicator(): FormGroup {
    return this.fb.group({
      indicatorName: ["", Validators.required],
      metrics: ["", Validators.required],
    });
  }

  /// code for add button//////////
  // addIndicator(): void {
  //   this.indicator = this.dataEntryForm.get('indicator') as FormArray;
  //   this.indicator.push(this.createIndicator());
  // }

  // removeIndicator(i: number) {
  //   this.indicator.removeAt(i);
  // }

  addData() {
    let indicators = this.dataEntryForm.value.indicator;
    const indicator: any = [];
    const metrics: any = [];

    indicators.forEach(element => {
      const ind = [element.indicatorName];
      indicator.push(ind);
    });

    indicators.forEach(element => {
      const met = [element.metrics];
      metrics.push(met);
    });

    this.dataService.addData(this.dataEntryForm.value.learningEvents, this.dataEntryForm.value.learningActivities, this.dataEntryForm.value.indicator).subscribe(() => {
      this.router.navigate(['/data']);
    })
    this.dataEntryForm.reset(); // clear from entry
    this.similarActivityMessage = false;
   // location.reload(); // reload web page
    this.successfulMessage = "<b>Indicator and their Metrics added successfully!</b>";
    //window.alert("");
  }


  fetchdata() {
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      for (var val of this.data) {
        this.options.push(val["LearningEvents"]);
      }
      this.selected.push(this.options);
    });
  }
  learningValueChange(x:any) {
    this.successfulMessage = false; //to hide the success message
    this.selectedevent = x;
    //console.log("Event: ", x);
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      let event = this.data.filter(function (obj) {
        return x.includes(obj.LearningEvents);
      });
      this.setLearningActivities(event);

      if (x != "") {
        this.data = event;
      }
    });
  }
  setLearningActivities(event: any) {
    this.dropdownList = [];
    for (let learningEvents of event) {
      for (let entry of learningEvents.LearningActivities) {
        this.dropdownList.push(entry.Name)
      }
    }

  }

  onActivityValueChange(activityValue: any) {
    let value = activityValue;
    console.log("ActValue: ", activityValue);
    if(activityValue == "Group Work")
    {
      this.similarActivityMessage = "The selected learning activity <em>\"Group Work\"</em> lies under the learning events <em>\"Create, Practice and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Group Work\"</em> activity in the mentioned learning events.";
    }
    else if (activityValue == "Review/Study") {
      this.similarActivityMessage = "The selected learning activity <em>\"Review/Study\"</em> lies under the learning events <em>\"Receive, Meta-learn or Self-reflect and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Review/Study\"</em> activity in the mentioned learning events.";
    }
    else if (activityValue == "Presentation") {
      this.similarActivityMessage = "The selected learning activity <em>\"Presentation\"</em> lies under the learning events <em>\"Receive, Imitate and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Presentation\"</em> activity in the mentioned learning events.";
    }
    else if (activityValue == "Exercise (Training)") {
      this.similarActivityMessage = "The selected learning activity <em>\"Exercise (Training)\"</em> lies under the learning events <em>\"Imitate, Experiment and Practice\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Exercise (Training)\"</em> activity in the mentioned learning events.";
    }
    else if (activityValue == "Question (Query/Inquiry)") {
      this.similarActivityMessage = "The selected learning activity <em>\"Question (Query/Inquiry)\"</em> lies under the learning events <em>\"Practice and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Question (Query/Inquiry)\"</em> activity in the mentioned learning events.";
    }
    else if (activityValue == "Survey (Questionnaire)") {
      this.similarActivityMessage = "The selected learning activity <em>\"Survey (Questionnaire)\"</em> lies under the learning events <em>\"Explore, Practice and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Survey (Questionnaire)\"</em> activity in the mentioned learning events.";
    }
    else if (activityValue == "Peer review/Assessment") {
      this.similarActivityMessage = "The selected learning activity <em>\"Peer review/Assessment\"</em> lies under the learning events <em>\"Practice and Meta-learn or Self-reflect\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Peer review/Assessment\"</em> activity in the mentioned learning events.";
    }
    else {
      this.similarActivityMessage = false;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
