import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { MainFormService } from '../main-form.service';
import {AppDataService} from "../app-data.service";
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-add-project',
  templateUrl: '../edit-project/edit-project.component.html',
  styleUrls: ['../edit-project/edit-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project: Project;
  projectForm: FormGroup;
  pageType: string = "add";
  alerts = {
    successMessage : false,
    errorMessage : false
  };
  companies$: Observable<Response>;

  constructor(private mainFormService: MainFormService, private appDataService: AppDataService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {

    this.companies$ = this.appDataService.getAllCompanies();
    this.projectForm = this.mainFormService.projectForm;
    this.projectForm.reset();
    this.projectForm.controls.data["controls"].date_created.setValue(this.transformDate(Date.now()));
    

    console.log("");
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'MM/dd/yyyy'); //whatever format you need. 
  }

  add() {
    this.appDataService.addProject(this.projectForm.value.data).subscribe(
      result => {
        // SUCCESS
        console.log(result);
        this.router.navigate(['/projects']);
      }, 
      error => {
        // ERROR
        console.log("Error adding the project");
        this.alerts.successMessage = false;
        this.alerts.errorMessage = true;
      }
    );
  }
}
