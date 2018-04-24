import { Component, OnInit } from '@angular/core';
import { Project } from "./model/project";
import {Observable} from "rxjs/Observable";
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  constructor(private dataService: AppDataService) {

  }

  ngOnInit() {
    
  }

}
