import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { MainFormService } from '../main-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: '../edit-project/edit-project.component.html',
  styleUrls: ['../edit-project/edit-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project: Project;
  projectForm: FormGroup;
  pageType: string = "add";
  alerts: Object = {
    successMessage : false,
    errorMessage : false
  };

  constructor(private mainFormService: MainFormService) { }

  ngOnInit() {
    this.projectForm = this.mainFormService.projectForm;
    this.projectForm.reset();
    console.log("ADDING");
  }

}
