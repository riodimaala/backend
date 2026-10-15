import * as studentService from '../services/studentService.js';

export const getAllStudents = async (req, res) => {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
};

export const createStudents = async (req, res) => {
    const {name, srcode, program} = req.body; 
    const student = {name, srcode, program}

try{
    const studentId = await studentService.insertStudent(student);
    res.status(200).json({ 
        success: true,
        message: studentId
    });

}catch(e){
    console.error(e);
    res.status(500).json({
        error: "Internal Server Error"
        });
    }
}

export const editStudent = async (req, res) => {
    const {name, srcode, program} = req.body;
    const {id} = req.params;
    const student = {id, name, srcode, program};

    try{
        const updatedStudent = await studentService.updateStudent(student);
            res.status(200).json({
                success: true,
                message: "UpdatedStudent"
            });
    

}catch(e){
    console.error(e);
    res.status(500).json({
        error: "Internal Server Error"
        });
    }

}
