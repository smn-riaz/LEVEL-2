
import { RequestHandler,  } from "express";
import {  UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
// import { UserValidation } from "./user.validation";



const createStudent: RequestHandler = catchAsync(async (req, res) => {



  const {password, student: studentData } = req.body;

  // data validation using joi
  // const {error,value} =studentValidationSchema.validate(studentData)
 


  // data validation using zod
  //
 
  const result = await UserServices.createStudentIntoDB(password, studentData);

  // res.status(200).json({
  //   success: true,
  //   message: 'Student is created successfully',
  //   data: result,
  // });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result
  })



});


export const userControllers = {
    createStudent
}