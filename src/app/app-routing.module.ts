import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectResolver } from './project.resolver';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "home",
    component: HomeComponent

  },
  {
    path: "projects",
    component: ProjectListComponent
  },
  {
    path: "add",
    component: AddProjectComponent
  },
  {
    path: "projects/:id",
    component: EditProjectComponent,
    resolve: {
      project: ProjectResolver
    }
  },
  {
      path: "about",
      component: AboutComponent
  }//,
  // {
  //   path: "**"
  //   nomponent: NotFound
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
