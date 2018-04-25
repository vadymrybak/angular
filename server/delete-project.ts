import {Request, Response} from 'express';
import { PROJECTS } from "./db-data";

export function deleteProject(req: Request, res: Response) {

    const projectId = req.params["id"];
    const project = PROJECTS.find(project => project.id == projectId);
    let index = PROJECTS.indexOf(project);

    console.log(index);
    PROJECTS.splice(index, 1);

    // Imitating server delay
    setTimeout(function() {
        res.status(200).json( { deleted_index : index } );
    }, 500);
    
}