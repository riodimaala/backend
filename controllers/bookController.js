import * as bookService from '../services/bookService.js';

export const getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
};