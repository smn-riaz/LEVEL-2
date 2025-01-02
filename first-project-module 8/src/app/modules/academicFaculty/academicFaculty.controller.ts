import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.service";
import httpStatus from "http-status";


const createAcademicFaculty:RequestHandler = catchAsync(async(req, res) => {

const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body)
console.log(result);

sendResponse(res, {
    statusCode:httpStatus.OK,
    success:true,
    message:'Academic Faculty is created successfully',
    data: result
})

})





const getSingleAcademicFaculty: RequestHandler = catchAsync(async(req,res)=> {

    const {facultyId} = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId)


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Academic Faculty is retrived successfully",
        data:result
    })
})






const updateAcademicFaculty : RequestHandler = catchAsync(async(req, res) => {
    const {facultyId} = req.params;
    const result = await AcademicFacultyServices.updateAcademicFacultyFromDB(facultyId, req.body)


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Academic Faculty is updated successfully",
        data:result
    })
})




const getAllAcademicFacultys:RequestHandler = catchAsync (async(req, res) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB()


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"All Academic Facultys are retrived successfully",
        data:result
    })
})





export const AcademicFacultyControllers = {createAcademicFaculty, updateAcademicFaculty, getAllAcademicFacultys, getSingleAcademicFaculty}