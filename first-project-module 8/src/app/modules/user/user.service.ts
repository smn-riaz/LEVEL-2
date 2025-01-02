import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password:string, payload: TStudent) => {

  // create a user object
  const userData: Partial<TUser> = {}


  // if password is not given, use default password
  userData.password = password || (config.default_passord as string)


  // set student role
  userData.role = "student"

// year semesterCode 4digitCode


//find academic semester info
const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)

if (!admissionSemester) {
  throw new Error("Admission semester not found.");
}

  // set generated id
  userData.id = await  generateStudentId(admissionSemester)



  // create a user 

const newUser = await User.create(userData)

console.log(newUser);
// create a student 

if(Object.keys(newUser).length){
  // set id, _id as user
  payload.id = newUser.id
  payload.user = newUser._id // refference id


  const newStudent = await Student.create(payload)
  return newStudent
}

};



export const UserServices = {
    createStudentIntoDB
}