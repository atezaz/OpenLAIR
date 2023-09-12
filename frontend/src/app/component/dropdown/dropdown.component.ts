import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from "@angular/core";
import { FormBuilder,FormControl,NgModel } from "@angular/forms";
import { MatOptionSelectionChange} from '@angular/material';
import { MatOption } from '@angular/material';

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {
  learningevents = new FormControl();
  learningEvents:any [] = [];
 
  @Input() model: NgModel; 
  @Input() values = [];
  @Output() valueChange = new EventEmitter();
  selected : any;
  @Input() text = 'Select All';
  @ViewChild('allSelected',{static: false}) private allSelected: MatOption;

  
  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.setLearningEvent();  
    
      
  }
  
setLearningEvent(){
}

changeLearningEvents(event: MatOptionSelectionChange, state: any){
  
    this.valueChange.emit(state);

   
}
 


}

