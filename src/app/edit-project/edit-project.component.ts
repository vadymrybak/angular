import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../model/project';

import {AppDataService} from "../app-data.service";
import { MainFormService } from '../main-form.service';

import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import 'rxjs/add/operator/do';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Project;
  projectForm: FormGroup;
  pageType: string = "edit";
  alerts = {
    successMessage : false,
    errorMessage : false
  };
  companies$: Observable<Response>;
  verbatims: {};

  constructor(private appDataService: AppDataService, 
              private mainFormService: MainFormService, 
              private route: ActivatedRoute, 
              private router: Router,
              @Inject('Dictionary') dict: any) {
                this.verbatims = <any>dict.edit;
                console.log(this.verbatims);
               }

  ngOnInit() {

    this.companies$ = this.appDataService.getAllCompanies();

    this.project = this.route.snapshot.data["project"];
    this.projectForm = this.mainFormService.projectForm;
    this.projectForm.reset();

    this.projectForm.setValue({
      data: this.project
    });

    console.log(this.project);

  }

  close(alert: string): void {
    this.alerts[alert] = false;
  }

  companiesChanged() {
    console.log(this.projectForm.controls.data);
  }

  save(): void {
    this.appDataService.updateProject(this.projectForm.value.data)
    .subscribe(() => 
      {
        this.alerts.errorMessage = false;
        this.alerts.successMessage = true;
        console.log("this.projectForm.value",this.projectForm.value);
        console.log(this.projectForm.controls.data);
        this.projectForm.markAsPristine();
      },
      error => {
        console.log("Error updating the project");
        this.alerts.successMessage = false;
        this.alerts.errorMessage = true;
      }
    );

  }

}
