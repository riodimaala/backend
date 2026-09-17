import * as bookModel from '../models/bookmodel.js';

export const getAllBooks = async () => { 
     const books = await bookModel.fetchAllBooks();
     return books;
}