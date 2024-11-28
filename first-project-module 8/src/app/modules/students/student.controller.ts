import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';

import { studentValidationSchema } from './student.zod.validation';





const createStudent = async (req: Request, res: Response) => {
  try {


    const { student: studentData } = req.body;

    // data validation using joi
    // const {error,value} =studentValidationSchema.validate(studentData)
   


    // data validation using zod
    const zodParsedData = studentValidationSchema.parse(studentData)
   
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // if(error) {
    //   res.status(500).json({
    //     success:false,
    //     message:"something error",
    //     error:error
    // })
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });

  } catch (error: any) {
    res.status(500).json({
        success:false,
        message:error.message || "something error",
        error:error
    })
  }
};






const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are received',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success:false,
      message:error.message || "something went wrong",
      error
    })
  }
};





const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is received',
      data: result,
    });
  } catch (err) {
   console.log(err);
  }
};







const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err) {
   console.log(err);
  }
};








export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
