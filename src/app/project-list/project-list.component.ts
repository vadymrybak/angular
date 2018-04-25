import { Component, OnInit } from '@angular/core';

import { Project } from '../model/project';
import { Order } from '../model/order-enum';
import { Search } from '../model/search';

import {AppDataService} from "../app-data.service";

// RxJS
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subject } from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
declare let $ : any;


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  
  projectSubject$ = new BehaviorSubject<Search>(new Search(1));  // Set initial page to be 1
  globalSearch = new Search(1);
  projects_array: Project[] = new Array();
  loading: boolean = true;
  currentProject: Project;
  editLoading: boolean = false;
  itemsPerpage: number = 10;
  projectCount: number = 0;

  constructor(private appDataService: AppDataService) { }

  ngOnDestroy(){
    this.projectSubject$.unsubscribe();
  }

  ngOnInit() {
    this.globalSearch.sortOrder = Order.DESC;

    const projectCount$ = this.appDataService.getProjectscount().subscribe(data => {
      this.projectCount = data;
    });

    this.projectSubject$
    .debounceTime(500)
    .do(search => {
      this.loading = true;
      console.log(search);
    })
    .switchMap( search => this.appDataService.getAllProjects(search.page, this.itemsPerpage, search.searchString))
    .subscribe(data => {
      this.projects_array = data;
      this.loading = false;
    });  
  }

  descriptionClicked(project: Project){
    this.currentProject = project;
  }

  deleteClicked(project: Project) {
    this.currentProject = project;
  }

  deleteConfirmed(){
    const deleteProject$ = this.appDataService.deleteProject(this.currentProject.id).subscribe(response => {
      console.log("Success: ", response);
      $.notify({
        // options
        message: 'Project Deleted' 
      },{
        // settings
        type: 'warning',
        placement : {
          from : "bottom",
          align: "right"
        }
      });
      this.projectSubject$.next(this.globalSearch);
      },
      error => {
        console.log("error:", error);
    }
    );
  }

  editClicked() {
    this.editLoading = true;
  }

  pageClicked(activePage) {
    this.loading = true;
    this.globalSearch.page = activePage;
    this.projectSubject$.next(this.globalSearch);
  }

  searchInputChanged($value){
    this.globalSearch.searchString = $value;
    this.projectSubject$.next(this.globalSearch);
    console.log($value);
  }

  sortBy(field: string): void{
    this.loading = true;

    if (this.globalSearch.sortField === field)
      this.globalSearch.sortOrder = this.globalSearch.sortOrder == Order.ASC ? this.globalSearch.sortOrder = Order.DESC : this.globalSearch.sortOrder = Order.ASC;

    this.globalSearch.sortOrder = this.globalSearch.sortOrder;
    this.globalSearch.sortField = field;

    this.projectSubject$.next(this.globalSearch);

  }
}
