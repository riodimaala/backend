import * as studentModel from '../models/studentmodel.js';

export const getAllStudents = async () => { 
     const students = await studentModel.fetchAllStudents();
     return students;
}

export const insertStudent = async (student) => { 
     const studentId = await studentModel.insertStudent(student);
     return studentId;
}

export const updateStudent = async (student) => {
    const updatedStudent = await studentModel.updateStudent(student);
    return updatedStudent;
}
