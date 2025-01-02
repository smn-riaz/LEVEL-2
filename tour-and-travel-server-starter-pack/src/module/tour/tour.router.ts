import { Router } from 'express';
import { tourController } from './tour.controller';


const tourRouter = Router()

tourRouter.post("/create-tour", tourController.createTour)
tourRouter.get("/", tourController.getTours)
tourRouter.get("/:id", tourController.getSingleTour)
tourRouter.put("/:id", tourController.updateTour)
tourRouter.delete("/:id", tourController.deleteTour)
tourRouter.get("/schedule/:id", tourController.getNextSchedule)


export default tourRouter