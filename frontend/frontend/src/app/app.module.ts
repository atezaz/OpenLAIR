import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatCheckboxModule
} from '@angular/material';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './component/add-data/add-data.component';
import { HeaderComponent } from './component/header/header.component';
import { SanitizeHtmlPipe } from './component/display/filter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';
import { DisplayComponent } from './component/display/display.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { ReferanceComponent } from './component/reference/referance.component';
import { SelectCheckAllComponent } from './component/display/select-check-all.component';
import { AuthGuardService } from './auth-guard.service';

import { AdminComponent } from './component/admin/admin.component';







const routes: Routes = [
  {
    path: 'add/data', component: AddDataComponent
  },
  //   canActivate: [AuthGuardService]
  // },
  { path: 'reference', component: ReferanceComponent },
  { path: 'login', component: AdminComponent },

  { path: 'display/data', component: DisplayComponent },
  { path: '', redirectTo: 'display/data', pathMatch: 'full' }
];
;
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    HeaderComponent,
    DisplayComponent,
    SanitizeHtmlPipe,
    DropdownComponent,
    SelectCheckAllComponent,
    ReferanceComponent,

    AdminComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    NgMultiSelectDropDownModule,
    MatSelectModule,
    AngularMultiSelectModule,
    MatCheckboxModule,
    AngularFontAwesomeModule



  ],

  providers: [DataService, AuthGuardService],

  bootstrap: [AppComponent]
})
export class AppModule { }
