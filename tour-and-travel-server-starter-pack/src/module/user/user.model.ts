import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    age:{
        type:Number,
        required:[true, "Please provide your age"]
    },
    email:{
        type:String,
        required:[true, "Please provide your email"],
        unique:true,
        validate: {
            validator: function (value:string) {
              // Regex for validating email
              // eslint-disable-next-line no-useless-escape
              const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              return emailRegex.test(value);
            },
            message:  "{VALUE} is not a valid email address!"
          },
        },
    photo:String,
    role:{
        type:String,
        required:true,
        enum:{
            values:['user','admin'],
            message:"{VALUE} is not valid, please provide a valid role"
        },
        default:"user"
    },
    userStatus:{
        type:String,
        required:true,
        enum:['active','inactive'],
        default:"active"
    },
})


// hook -> pre
// userSchema.pre('find', function(this, next) {

//     this.find({userStatus: {$eq: 'active'}, age:{$lte:30}})

//     next()
// })




// post hook
// userSchema.post('find', function(docs,next){
//     docs.forEach((doc:IUser) => {
//         doc.name = doc.name.toUpperCase()
//     });
//     next()
// })



const User = model<IUser>("User", userSchema)


export default User