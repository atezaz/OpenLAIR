import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { data } from '../../data.model';
import { FormControl, FormGroup, FormBuilder, FormArray, Validator, Validators } from '@angular/forms';

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
  selectedItems = [];
  fileToUpload: File = null;
  pdfSrc: string;
  file: any;
  currentFile: any;
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {

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


  addIndicator(): void {
    this.indicator = this.dataEntryForm.get('indicator') as FormArray;
    this.indicator.push(this.createIndicator());
  }

  removeIndicator(i: number) {

    this.indicator.removeAt(i);


  }

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

    //this.dataEntryForm.reset(); // clear from entry
    
    //location.reload(); // reload web page

    window.alert("Indicator added successfully!");
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
  learningValueChange(x) {
    this.selectedevent = x;
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

  onFileSelected(files) {

    this.file = files.item(0);
    console.log(this.file)
  }
  upload() {

    this.dataService.upload(this.file).subscribe(response => {

      console.log('response recieved', response)
    }, error => {
      console.log(error)
    });


  }
}
