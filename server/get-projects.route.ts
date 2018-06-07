import {Request, Response} from 'express';
import { PROJECTS } from "./db-data";



export function getAllProjects(req: Request, res: Response) {
    let page: number = req.query["page"] - 1;
    let itemsPerPage: number = req.query["itemsPerPage"];
    let searchString: string = req.query["searchString"];
    
    //console.log("req ", req);

    console.log(page, itemsPerPage, searchString);


    let from: number = page * itemsPerPage;
    let until: number = +from + +itemsPerPage;

    //console.log(page, from, until);

    setTimeout(function() {
        res.status(200).json(
            {
                payload: Object.keys(PROJECTS).filter((i, index) => +index >= from && +index < until).map((key) => PROJECTS[key])
            });
    }, 500);

    

}