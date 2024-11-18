import { Schema, model } from 'mongoose';
import {
  Gurdian,
  LocalGurdian,
  Student,
  UserName,
} from './students/student.interface';
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim:true,
    maxlength: [20, "First Name cann't be more than 20 characters"],
    validate: {
        validator: function(value:string) {
            const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
            return firstNameStr === value
        },
        message: "{VALUE} is not capitalized"
    }
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    validate: {
        validator: (value:string) => validator.isAlpha(value),
        message:"{VALUE} is not valid"
    }
  },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required:true, unique:true },
  name: { type: userNameSchema, required: true },
  gender: { type: String, enum: {
    values:['male', 'female'],
    message:"{VALUE} is not supported"
  }, required: true },
  dateOfBirth: { type: String },
  email: { type: String, required: true,unique:true , validate:{
    validator: (value:string) => validator.isEmail(value),
    message:"{VALUE} Invalid email"
  }},
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum:{
        values :  ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message:"The blood group must be +ve and -ve",
    
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: { type: gurdianSchema, required: true },
  localGurdian: { type: localGurdianSchema, required: true },
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
});

export const StudentModel = model<Student>('Student', studentSchema);
