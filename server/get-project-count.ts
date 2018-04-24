import {Request, Response} from 'express';
import { PROJECTS } from "./db-data";



export function getProjectCount (req: Request, res: Response) {

    setTimeout(function() {
        res.status(200).json(
            {
                payload :  PROJECTS.length
            }
        );
    }, 300);

    

}