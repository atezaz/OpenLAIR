import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { Router } from '@angular/router';
import{data} from '../../data.model';
import { FormControl, FormGroup,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})

export class AddDataComponent implements OnInit {

 public dataEntryForm: FormGroup;
 public indicator:FormArray;


  
  
  constructor(private dataService:DataService,private router:Router,private  fb:FormBuilder) {
    //// form entries///////
    this.dataEntryForm = this.fb.group({
      learningEvents: " ",
      learningActivities: "",
      indicator: this.fb.array([this.createIndicator()])
  
    });
   
   }
  
 ngOnInit() {
}

get indicatorControls(){
  return this.dataEntryForm.get('indicator')['controls'];
}

/// adding new indicator and meterics entry/////////// 
createIndicator(): FormGroup {
  return this.fb.group({
    indicatorName: '',
    metrics: '',  
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

addData(learningEvents,learningActivities,indicator,metrics){
   
       
 
    this.dataService.addData(this.dataEntryForm.value.learningEvents,this.dataEntryForm.value.learningActivities,this.dataEntryForm.value.indicator,this.dataEntryForm.value.indicator).subscribe(()=>{
    this.router.navigate(['/data']);
    
    })
   this.dataEntryForm.reset(); // clear from entry
    location.reload(); // reload web page
  }
  

}