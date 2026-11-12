import pool from '../config/db.js';

//READ
export const fetchAllStudents = async () => {
    const [rows] = await pool.query('SELECT * FROM student');
    return rows;
};

//Find student by id
export const findStudentById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM student WHERE id = ?",
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

//insert

export const insertStudent = async (student) => {
    const [result] = await pool.query(
    "INSERT INTO student(name, srcode, program) VALUES (?, ?, ?)",
     [student.name, student.srcode, student.program]
    
);

return result.insertId;

}

//update
export const updateStudent = async (student) => {
    const [result] = await pool.query(
        "UPDATE student SET name = ?, srcode = ?, program = ? WHERE id = ?",
        [student.name, student.srcode, student.program, student.id]
    );
    return result.affectedRows;
}

//delete
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM student WHERE id = ?", [id]
    );
    return result.affectedRows;
}
