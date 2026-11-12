import * as studentModel from '../models/studentmodel.js';
import ValidationError from '../utils/ValidationError.js';

export const getAllStudents = async () => { 
     const students = await studentModel.fetchAllStudents();
     return students;
}

const doesStudentExist =  async    (student) => {
    let existing;
    if(Object.hasOwn(student, 'id')) {
        existing = await studentModel.findStudentById(student.id);
    }else {
        existing = await studentModel.findStudentByNameAndAuthor(student);
    }


   if (existing.length > 0) {
    return true;

   }
    return false;
}


export const createStudent = async (student) =>{
    if ( !student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, 'All fields are required!');
    }

    const existing = await doesStudentExist(student);
    
    if (existing) {
        throw new ValidationError(409, 'Student already exists!');
    }
    const studentId = await studentModel.insertStudent(student);
    return studentId;
}

export const updateStudent = async (student) => {
       if ( !student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, 'Name and author are required!');
    }

    const existing = await doesStudentExist(student);
    
    if (!existing) {
        throw new ValidationError(404, 'Student does not exist!');
    }

    const updatedStudent = await studentModel.updateStudent(student);
    return updatedStudent;
}

export const deleteStudent = async (id) => {
    const existing = await studentModel.findStudentById(id);
    if (existing.length === 0) {
        throw new ValidationError(404, 'Student does not exist!');
    }
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}