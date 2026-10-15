import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.getAllBooks);
bookRoutes.post('/', bookController.createBooks);
bookRoutes.put('/:id', bookController.editBook);

export default bookRoutes;
