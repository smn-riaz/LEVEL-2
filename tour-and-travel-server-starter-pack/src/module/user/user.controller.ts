// req & res

import { Request, Response } from "express";

import { userService } from "./user.service";

const createUser = async (req:Request, res:Response) => {

    try {
        const payload = req.body

       const result = await userService.createUser(payload)
    
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



const getUser = async (req:Request, res:Response) => {

    try {
         
        const result = await userService.getUser()

        res.status(200).json({
            status:true,
            message:"Successfully the users are finded",
            result
        })

    } catch (error) {
        res.json({
            status:false,
            message:'Something went wrong',
            error
        })
    }


}


const getSingleUser = async (req:Request, res:Response) => {
   try {
    const id = req.params.id
    const result = await userService.getSingleUser(id)

    res.send({
        status:true,
        message:"User finded successfully",
        result
    })
   } catch (error) {
    res.status(500).json({
        status:false,
        message:"Something went wrong",
        error
    })
   }
    

}



const updateUser = async (req:Request, res:Response) => {
    try {
     const {id} = req.params
     const body = req.body
     const result = await userService.updateUser(id,body)


     res.send({
        status:true,
        message:"User updated successfully",
        result
    })
    } catch (error) {
     res.status(500).json({
         status:false,
         message:"Something went wrong",
         error
     })
    }
 }





 const deleteUser = async (req:Request, res:Response) => {
    try {
     const {id} = req.params
     const result = await userService.deleteUser(id)
 
     res.status(200).json({
         status:true,
         message:"User deleted successfully",
         result
     })
    } catch (error) {
     res.status(500).json({
         status:false,
         message:"Something went wrong",
         error
     })
    }
 }




export const userController = {
    createUser, getUser, getSingleUser, updateUser, deleteUser
}