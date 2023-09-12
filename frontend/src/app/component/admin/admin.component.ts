import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  public loginForm: FormGroup;
  username: string;
  password: string;
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],


    });
  }

  ngOnInit() {

  }

  submit() {

    this.dataService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        res => {
          this.loginForm.reset();
          this.dataService.loggedIn = true;
          this.router.navigate(['add'])
        },

        err => alert('User NOT found!')
      )
  }
  

}
