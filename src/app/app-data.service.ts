import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Project } from "./model/project";
import {map} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
const links = {
    getCompanies: "/api/companies/",
    get : "/api/projects/",
    getById : "/api/project/",
    update : "/api/update/",
    getProjectCount: "/api/projectCount/",
    add: "/api/addProject/",
    delete: "/api/deleteProject/",
    test: "/api/text.php"
};

@Injectable()
export class AppDataService {

    constructor(private http:HttpClient) {

    }

    getTest(): Observable<Object> {
        return this.http.get(links.test);
    };

    getAllCompanies(): Observable<Response> {
        return this.http.get(links.getCompanies).pipe(
            map(res => res['payload'])
        );
    };

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
        console.log("updating", project)
        return this.http.put(links.update, project, httpOptions);
    }

    addProject (project: Project): Observable<any> {
        return this.http.post(links.add, project, httpOptions);
    }

    deleteProject (id: number): Observable<Object> {
        return this.http.get(`${links.delete}${id}`, httpOptions);
    }

}
