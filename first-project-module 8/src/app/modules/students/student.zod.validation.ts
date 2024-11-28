import { z } from 'zod';

// UserName ValidationSchema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, "First Name can't be more than 20 characters")
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: 'First Name must be capitalized' }
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: 'Last Name must contain only alphabetic characters',
    }),
});

// Guardian ValidationSchema
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father Name is required'),
  fatherOccupation: z.string().nonempty('Father Occupation is required'),
  fatherContactNo: z.string().nonempty('Father Contact No is required'),
  motherName: z.string().nonempty('Mother Name is required'),
  motherOccupation: z.string().nonempty('Mother Occupation is required'),
  motherContactNo: z.string().nonempty('Mother Contact No is required'),
});

// Local Guardian ValidationSchema
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Local Guardian Name is required'),
  occupation: z.string().nonempty('Local Guardian Occupation is required'),
  contactNo: z.string().nonempty('Local Guardian Contact No is required'),
  address: z.string().nonempty('Local Guardian Address is required'),
});

// Student ValidationSchema
const studentValidationSchema = z.object({
  id: z.string().nonempty('Student ID is required'),
  password:z.string().max(20),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female','other'], { errorMap: () => ({ message: 'Gender must be either "male" or "female"' }) }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  contactNo: z.string().nonempty('Contact No is required'),
  emergencyContactNo: z.string().nonempty('Emergency Contact No is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({ message: 'Blood group must be a valid type (e.g., A+, O-, etc.)' }),
  }),
  presentAddress: z.string().nonempty('Present Address is required'),
  permanentAddress: z.string().nonempty('Permanent Address is required'),
  gurdian: guardianValidationSchema,
  localGurdian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted:z.boolean().default(false)
});

export { userNameValidationSchema, guardianValidationSchema, localGuardianValidationSchema, studentValidationSchema };
