import Joi from 'joi';
// creating a schema for validaton using joi
const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .max(20)
      .regex(/^[A-Z][a-zA-Z]*$/)
      .required()
      .messages({
        'string.base': 'First Name must be a string',
        'string.max': "First Name can't be more than 20 characters",
        'string.pattern.base': 'First Name must start with an uppercase letter',
        'any.required': 'First Name is required',
      }),
    middleName: Joi.string().optional(),
    lastName: Joi.string()
      .regex(/^[a-zA-Z]*$/)
      .required()
      .messages({
        'string.base': 'Last Name must be a string',
        'string.pattern.base': 'Last Name must contain only alphabetic characters',
        'any.required': 'Last Name is required',
      }),
  });
  
  // Validation schema for Guardian
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'any.required': 'Father Name is required',
    }),
    fatherOccupation: Joi.string().required().messages({
      'any.required': 'Father Occupation is required',
    }),
    fatherContactNo: Joi.string().required().messages({
      'any.required': 'Father Contact No is required',
    }),
    motherName: Joi.string().required().messages({
      'any.required': 'Mother Name is required',
    }),
    motherOccupation: Joi.string().required().messages({
      'any.required': 'Mother Occupation is required',
    }),
    motherContactNo: Joi.string().required().messages({
      'any.required': 'Mother Contact No is required',
    }),
  });
  
  // Validation schema for Local Guardian
  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'Local Guardian Name is required',
    }),
    occupation: Joi.string().required().messages({
      'any.required': 'Local Guardian Occupation is required',
    }),
    contactNo: Joi.string().required().messages({
      'any.required': 'Local Guardian Contact No is required',
    }),
    address: Joi.string().required().messages({
      'any.required': 'Local Guardian Address is required',
    }),
  });
  
  // Validation schema for Student
  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({
      'any.required': 'Student ID is required',
    }),
    name: userNameValidationSchema.required().messages({
      'any.required': 'Student Name is required',
    }),
    gender: Joi.string()
      .valid('male', 'female')
      .required()
      .messages({
        'any.only': '{#value} is not supported',
        'any.required': 'Gender is required',
      }),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': 'Invalid email address',
        'any.required': 'Email is required',
      }),
    contactNo: Joi.string().required().messages({
      'any.required': 'Contact No is required',
    }),
    emergencyContactNo: Joi.string().required().messages({
      'any.required': 'Emergency Contact No is required',
    }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .messages({
        'any.only': 'Blood group must be one of A+, A-, B+, B-, AB+, AB-, O+, O-',
      }),
    presentAddress: Joi.string().required().messages({
      'any.required': 'Present Address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'any.required': 'Permanent Address is required',
    }),
    gurdian: guardianValidationSchema.required().messages({
      'any.required': 'Guardian information is required',
    }),
    localGurdian: localGuardianValidationSchema.required().messages({
      'any.required': 'Local Guardian information is required',
    }),
    profileImg: Joi.string().optional(),
    isActive: Joi.string()
      .valid('active', 'blocked')
      .default('active')
      .messages({
        'any.only': '{#value} is not a valid status',
      }),
  });
  
  

  export default studentValidationSchema