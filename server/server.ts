import * as express from 'express';
import {Application} from "express";
import {getAllProjects} from "./get-projects.route";
import { getProjectById } from './get-project-by-id';
import { updateProjectById } from './update-project-by-id';
import { getProjectCount } from './get-project-count';
import { addProject } from './add-project';

const app: Application = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/api/projects/:page/:itemsPerPage/:searchString?').get(getAllProjects);
app.route('/api/project/:id').get(getProjectById);
app.route('/api/update').put(updateProjectById);
app.route('/api/projectCount').get(getProjectCount);
app.route('/api/addProject').post(addProject);


const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




