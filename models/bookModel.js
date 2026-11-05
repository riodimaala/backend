import pool from '../config/db.js';

//Read 
export const fetchAllBooks = async () => {
  const [rows] = await pool.execute("SELECT * FROM book");
  return rows;
};


//Find book by id
export const findBookById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM book WHERE id = ?",
    [id]
  );
  return rows;
};

export const findBookByNameAndAuthor = async (book) => {
  const [rows] = await pool.query( "SELECT * FROM book WHERE name = ? AND author = ?",
    [book.name, book.author]
  );
  return rows;
};

// sa model mag iinsert ng book    model>service>controller>route

//Insert
export const insert = async(book) => {
  const[result] = await pool.query(
    "INSERT INTO book(name,author)VALUES(?,?)",
     [book.name, book.author]
    );
    return result.insertId;
} 
 
//Update
export const update = async ( book)  => {
  const[result] = await pool.query(
    "UPDATE book SET name = ?, author = ? WHERE id = ?",
    [book.name, book.author, book.id]
  );
  return result.affectedRows;
}

//Delete
export const deleteBook = async (id) => {
  const [result] = await pool.query(  
    "DELETE FROM book WHERE id = ?",
    [id]
  );
  return result.affectedRows;
}