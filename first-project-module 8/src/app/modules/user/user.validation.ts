import { z } from "zod";

 const userValidationSchema = z.object({
    password: z.string({
        invalid_type_error:'Password must be string'
    }).max(20, {message:"Password can't be more than 20 character "}).nonempty({ message: "Password is required and must be a non-empty string." }).optional(),

  });

  export const UserValidation = {
    userValidationSchema
  }