import {Request, Response} from 'express';
import { Project } from '../src/app/model/project';
import { PROJECTS } from "./db-data";
import { ProjectListComponent } from '../src/app/project-list/project-list.component';

class ProjectClass implements Project {
    id: number;
    identifier: string;
    name: string;
    description: string;
    owner: string;
    date_created: Date;

    constructor(id: number) {
        this.id = id;
    }
}

function randomInt(min, max): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

export function addProject(req: Request, res: Response) {
    let project: ProjectClass = new ProjectClass(222);

    project.id = randomInt(500, 999999);
    project.name = req.body.name;
    project.identifier = req.body.identifier;
    project.owner = req.body.owner;
    project.description = req.body.description;
    project.date_created = req.body.date_created;

    PROJECTS.push(project);

    res.status(200).json({ newId : project.id});
}


