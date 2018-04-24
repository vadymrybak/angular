import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "./model/project";
import {Observable} from "rxjs/Observable";
import { AppDataService } from "./app-data.service";



@Injectable()
export class ProjectResolver implements Resolve<Project> {

    constructor(private appDataService:AppDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        return this.appDataService.findProjectById(route.params['id']);
    }

}

