import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

import { AppDataService } from './app-data.service';
import { MainFormService } from './main-form.service';
import { ProjectResolver } from './project.resolver';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AddProjectComponent } from './add-project/add-project.component';


import { NgSelectModule } from '@ng-select/ng-select';
import { MenuButtonDirective } from './menu-button.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectListComponent,
    EditProjectComponent,
    PaginationComponent,
    AddProjectComponent,
    MenuButtonDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    AppDataService,
    MainFormService,
    ProjectResolver,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
