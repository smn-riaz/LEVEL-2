import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'
import {
  // StudentMethods,
  StudentModel,
  TGurdian,
  TLocalGurdian,
  TStudent,
  TUserName,
} from './students/student.interface';
import validator from 'validator';
import config from '../config';
import { boolean } from 'joi';



const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, "First Name cann't be more than 20 characters"],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not capitalized',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const gurdianSchema = new Schema<TGurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});


// for instance extra StudentMethods will be added.
// const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>


const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: [true, "Password is required"], maxlength:[20, "Password cannot be more than 20"] },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not supported',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} Invalid email',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: 'The blood group must be +ve and -ve',
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: { type: gurdianSchema, required: true },
  localGurdian: { type: localGurdianSchema, required: true },
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
  isDeleted:{type:Boolean, default:false}
}, {
  toJSON:{
    virtuals:true
  }
});




// virtual
studentSchema.virtual('fullName').get(function() {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
})









// pre save middleware / hook
studentSchema.pre('save', async function(next){
  // console.log(this, 'pre hook: we will save the data');

  // hashing password and save into DB
  const user = this
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
  
next()
})



// post save middleware / hook
studentSchema.post('save', function(doc, next){

  doc.password = ''
 

  next()
})



// Query middleware
studentSchema.pre('find', function(next){
// console.log(this);
this.find({isDeleted:{$ne: true}})

next()

})



studentSchema.pre('findOne', function(next){
  // console.log(this);
  this.find({isDeleted:{$ne: true}})
  
  next()
  
  })


// for pipeline
  studentSchema.pre('aggregate', function(next){
    
    this.pipeline().unshift({$match: {isDeleted: {$ne: true}}})
    
    next()
    
    })






// creating a custom static method
studentSchema.statics.isUserExists = async function(id:string) {
  const existingUser = await Student.findOne({id})
  return existingUser
}







// creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };


export const Student = model<TStudent, StudentModel>('Student', studentSchema);
