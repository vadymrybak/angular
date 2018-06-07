import * as express from 'express';
import {Application} from "express";
import {getAllProjects} from "./get-projects.route";
import { getProjectById } from './get-project-by-id';
import { updateProjectById } from './update-project-by-id';
import { getProjectCount } from './get-project-count';
import { addProject } from './add-project';
import { deleteProject } from './delete-project';
import { getAllCompanies } from './get-all-companies';

const app: Application = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.route('/api/projects/:page/:itemsPerPage/:searchString?').get(getAllProjects); // DONE
app.route('/api/project/:id').get(getProjectById); // DONE
app.route('/api/update').put(updateProjectById); // DONE
app.route('/api/projectCount').get(getProjectCount); // DONE
app.route('/api/addProject').post(addProject);
app.route('/api/deleteProject/:id').get(deleteProject);
app.route('/api/companies').get(getAllCompanies);


const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




