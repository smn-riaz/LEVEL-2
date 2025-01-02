
import { Student } from './student.model';


const getAllStudentsFromDB = async () => {
  const result = await Student.find().populate('admissionSemester').populate({
    path: 'academicDepartment',
    populate:''
  });
  return result;
};





const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  // return result;


  // using aggregate
  const result = await Student.aggregate([
    {$match:{id:id}}
  ])

  return result

};



const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, {isDeleted:true});
  return result;
};



export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB
};
