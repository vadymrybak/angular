import {Request, Response} from 'express';
import { PROJECTS } from "./db-data";

export function updateProjectById(req: Request, res: Response) {
    console.log(req.body);
    //console.log(res);

    const projectId = req.body.id;

    //const courses = Object.values(COURSES);
    const projects = Object.keys(PROJECTS).map(function(key) {
        return PROJECTS[key];
    });

    const project = projects.find(project => project.id == projectId);  

    project.name = req.body.name;
    project.identifier = req.body.identifier;
    project.owner = req.body.owner;
    project.description = req.body.description;

    res.status(200).json(project);
}