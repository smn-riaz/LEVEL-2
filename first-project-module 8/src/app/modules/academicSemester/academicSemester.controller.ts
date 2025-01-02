import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";
import httpStatus from "http-status";

const createAcademicSemester:RequestHandler = catchAsync(async(req, res) => {

const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)

sendResponse(res, {
    statusCode:httpStatus.OK,
    success:true,
    message:'Academic Semester is created successfully',
    data: result
})

})

const getSingleAcademicSemester: RequestHandler = catchAsync(async(req,res)=> {

    const {semesterId} = req.params;
    const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId)


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Academic semester is retrived successfully",
        data:result
    })
})






const updateAcademicSemester : RequestHandler = catchAsync(async(req, res) => {
    const {semesterId} = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(semesterId, req.body)


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Academic semester is updated successfully",
        data:result
    })
})



const getAllAcademicSemesters:RequestHandler = catchAsync (async(req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB()


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"All Academic semesters are retrived successfully",
        data:result
    })
})





export const AcademicSemesterControllers = {createAcademicSemester, updateAcademicSemester, getAllAcademicSemesters, getSingleAcademicSemester}