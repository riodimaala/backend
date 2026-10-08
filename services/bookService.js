import * as bookModel from '../models/bookModel.js';

export const getAllBooks = async () => { 
     const books = await bookModel.fetchAllBooks();
     return books;
}


export const insertBook = async (book) => { 
     const booksId = await bookModel.insert(book);
     return booksId;
}


