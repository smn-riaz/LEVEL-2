import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.service";
import httpStatus from "http-status";


const createAcademicDepartment:RequestHandler = catchAsync(async(req, res) => {

const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
console.log(result);

sendResponse(res, {
    statusCode:httpStatus.OK,
    success:true,
    message:'Academic Department is created successfully',
    data: result
})

})





const getSingleAcademicDepartment: RequestHandler = catchAsync(async(req,res)=> {

    const {departmentId} = req.params;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(departmentId)

console.log(result);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Academic Department is retrived successfully",
        data:result
    })
})






const updateAcademicDepartment : RequestHandler = catchAsync(async(req, res) => {
    const {departmentId} = req.params;
    const result = await AcademicDepartmentServices.updateAcademicDepartmentFromDB(departmentId, req.body)


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Academic Department is updated successfully",
        data:result
    })
})




const getAllAcademicDepartments:RequestHandler = catchAsync (async(req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicFacultiesFromDB()


    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"All Academic Departments are retrived successfully",
        data:result
    })
})





export const AcademicDepartmentControllers = {createAcademicDepartment, updateAcademicDepartment, getAllAcademicDepartments, getSingleAcademicDepartment}