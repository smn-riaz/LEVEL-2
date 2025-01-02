import { TAcademicSemester, TAcademicSemesterNameCodeMapper} from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const academicSemesterNameCodeMapper:TAcademicSemesterNameCodeMapper = {
    Autumn:'01',
    Summar:'02',
    Fall:'03'
}

const createAcademicSemesterIntoDB = async(payload:TAcademicSemester) => {


    // semester name --> semester code

if(academicSemesterNameCodeMapper[payload.name] !== payload.code) {
throw new Error("Invalid Semester Code")
}


    const result = await AcademicSemester.create(payload)

    return result
}




const getSingleAcademicSemesterFromDB = async(id:string) => {
const result = await AcademicSemester.findById(id)
return result
}


const updateAcademicSemesterFromDB = async (id:string, payload:Partial<TAcademicSemester>) => {
if(
    payload.name &&
    payload.code && 
    academicSemesterNameCodeMapper[payload.name] !== payload.code
) {
    throw new Error('Invalid Semester Code')
}


const result = await AcademicSemester.findByIdAndUpdate({_id:id}, payload, {new:true})

return result
}


const getAllAcademicSemestersFromDB = async() => {
const result = await AcademicSemester.find()
return result
}


export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB, getSingleAcademicSemesterFromDB, updateAcademicSemesterFromDB,getAllAcademicSemestersFromDB
}