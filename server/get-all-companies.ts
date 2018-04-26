import {Request, Response} from 'express';
import { COMPANIES } from "./db-data";



export function getAllCompanies(req: Request, res: Response) {

    setTimeout(function() {
        res.status(200).json(
            {
                payload: Object.keys(COMPANIES).map( (key) => COMPANIES[key]).sort()
            });
    }, 500);

    

}