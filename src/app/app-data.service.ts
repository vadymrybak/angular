import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Project } from "./model/project";
import {map} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
const links = {
    get : "/api/projects/",
    getById : "/api/project/",
    update : "/api/update/",
    getProjectCount: "/api/projectCount/"
};

@Injectable()
export class AppDataService {

    constructor(private http:HttpClient) {

    }

    getAllProjects(page: number, itemsPerPage: number, searchString: string): Observable<Project[]> {
        return this.http.get(`${links.get}${page}/${itemsPerPage}/${searchString}`)
            .pipe(
                map(res => res['payload'])
            );
    }

    getProjectscount(): Observable<number> {
        return this.http.get(`${links.getProjectCount}`)
            .pipe(
                map(res => res['payload'])
            );
    };

    findProjectById(projectId: number): Observable<Project> {
        return this.http.get<Project>(`${links.getById}${projectId}`);
    }

    updateProject (project: Project): Observable<any> {
        return this.http.put(links.update, project, httpOptions);
    }

}
