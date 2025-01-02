import { TAcademicSemester } from "../academicSemester/academicSemester.interface"
import { User } from "./user.model"


const findLastStudentId = async() => {
    const lastStudent = await User.findOne({
        role:'student'
    }, {
        id:1,
        _id:0
    }).sort({
        createdAt:-1
    }).lean()


    return lastStudent?.id?lastStudent.id.substring(6):undefined
}



export const generateStudentId = async(payload:TAcademicSemester) => {

    // fist time 0000
    let currentId =  (0).toString() 

    const lastStudentId = await findLastStudentId()
// 2030 01 0001
    const lastStudentSemesterCode = lastStudentId?.substring(4,6) //01
    const lastStudentYear = lastStudentId?.substring(0,4) //2030
    const currentSemesterCode = payload.code
    const currentYear = payload.year

    if(lastStudentId && lastStudentSemesterCode === currentSemesterCode &&
lastStudentYear === currentYear
    ){
currentId = lastStudentId.substring(6)
    }




    let increamentId = (Number(currentId)+1).toString().padStart(4,'0')

    increamentId = `${payload.year}${payload.code}${increamentId}`
    return increamentId
}