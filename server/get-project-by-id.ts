import {Request, Response} from 'express';
import { PROJECTS } from "./db-data";

export function getProjectById(req: Request, res: Response) {

    const projectId = req.params["id"];

    //const courses = Object.values(COURSES);
    const projects = Object.keys(PROJECTS).map(function(key) {
        return PROJECTS[key];
    });

    const project = projects.find(project => project.id == projectId);

    // Imitating server delay
    setTimeout(function() {
        res.status(200).json(project);
    }, 500);
    
}