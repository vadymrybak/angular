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
}
