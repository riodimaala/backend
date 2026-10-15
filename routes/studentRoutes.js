import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.getAllStudents);
studentRoutes.post('/', studentController.createStudents);
studentRoutes.put('/:id', studentController.editStudent);

export default studentRoutes;