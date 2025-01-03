import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";

const router = Router()

router.post('/create-academic-Department', validateRequest(academicDepartmentValidation.createAcademicDepartmentValidationSchema), AcademicDepartmentControllers.createAcademicDepartment)



router.get('/:departmentId', AcademicDepartmentControllers.getSingleAcademicDepartment)



router.patch('/:departmentId', validateRequest(academicDepartmentValidation.updateAcademicDepartmentValidationSchema), AcademicDepartmentControllers.updateAcademicDepartment)



router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments)

export const AcademicDepartmentRoutes = router