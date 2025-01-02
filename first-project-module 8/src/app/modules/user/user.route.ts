import express from "express"
import { userControllers } from "./user.controller"

import validateRequest from "../../middlewares/validateRequest"
import { studentValidations } from "../students/student.zod.validation"



const router = express.Router()







router.post('/create-student', validateRequest(studentValidations.createStudentValidationSchema), userControllers.createStudent)


export const UserRoutes = router