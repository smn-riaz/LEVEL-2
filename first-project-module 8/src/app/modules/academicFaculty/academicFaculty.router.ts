import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";

const router = Router()

router.post('/create-academic-faculty', validateRequest(academicFacultyValidation.createAcademicFacultyValidationSchema), AcademicFacultyControllers.createAcademicFaculty)



router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)



router.patch('/:facultyId', validateRequest(academicFacultyValidation.updateAcademicFacultyValidationSchema), AcademicFacultyControllers.updateAcademicFaculty)



router.get('/', AcademicFacultyControllers.getAllAcademicFacultys)

export const AcademicFacultyRoutes = router