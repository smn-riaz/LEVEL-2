import { Request, Response } from "express";
import { tourServices } from "./tour.service";

const createTour = async(req:Request, res:Response) => {
   try {
    const body  = req.body

    const result = await tourServices.createTour(body)

    res.status(200).json({
        status:true,
        message:"Tour created Successfully",
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





const getTours = async(req:Request, res:Response) => {
    try {
     
 
     const result = await tourServices.getTours()
 
     res.status(200).json({
         status:true,
         message:"Tour found Successfully",
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



 const getSingleTour = async(req:Request, res:Response) => {
    try {
     const {id} = req.params
 
     const result = await tourServices.getSingleTour(id)
 
     res.status(200).json({
         status:true,
         message:"Tour created Successfully",
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


 const updateTour = async(req:Request, res:Response) => {
    try {
     const {id} = req.params
 const body = req.body
     const result = await tourServices.updateTour(id, body)
 
     res.status(200).json({
         status:true,
         message:"Tour updated Successfully",
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



 const deleteTour = async(req:Request, res:Response) => {
    try {
     const {id} = req.params
 
     const result = await tourServices.deleteTour(id)
 
     res.status(200).json({
         status:true,
         message:"Tour deleted Successfully",
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


 const getNextSchedule = async(req:Request, res:Response) => {
    try {
     const {id} = req.params
 
     const result = await tourServices.getNextSchedule(id)
 
     res.status(200).json({
         status:true,
         message:"Schedule is found",
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




export const  tourController = {
    createTour, getTours, getSingleTour, updateTour, deleteTour, getNextSchedule
}