import * as bookService from '../services/bookService.js';

export const getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
};

export const createBooks = async (req, res) => {
    const {name, author} = req.body; 
    const book = {name, author}

try{
    const bookId = await bookService.createBook(book);
    res.status(200).json({ 
        success: true,
        message: bookId
    });

}catch(e){
    console.error(e);
    res.status(500).json({
        error: "Internal Server Error"
        });
    }
}