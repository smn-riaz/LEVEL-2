import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const userSchema = new Schema<TUser>({
    id:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    needsPasswordChange:{
        type:Boolean,
        default:true
    },
    role:{
        type: String,
        enum:['student', 'admin', 'faculty']
    },
    status:{
        type:String,
        enum:['in-progress','blocked'],
        default: "in-progress"
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{timestamps:true})



// pre save middleware / hook
userSchema.pre('save', async function(next){

    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_round))
    
  next()
  })
  
  
  
  // post save middleware / hook // set '' after saving password
  userSchema.post('save', function(doc, next){

    doc.password = ''
   
    next()
  })


export const User = model<TUser>('User',userSchema)