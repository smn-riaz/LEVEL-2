// req & res

import { Request, Response } from "express";
import User from "./user.model";

const createUser = async (req:Request, res:Response) => {

    try {
        const payload = req.body

        const result = await User.create(payload)
    
        res.json({
            message:'User created successfully',
            data:result
        })  
        
    } catch (error) {
        res.json({
            status:false,
            message:'Something wrong',
            error
        })
    }


}

export const userController = {
    createUser
}