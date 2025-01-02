import { Model } from "mongoose";

export interface ITour {
    name:string,
    duration:number;
    averageRating:number;
    price:number;
    coverImage:string;
    images:string[];
    startDates:Date[],
    startLocation:string
    locations:string[]
    slug:string
}


export interface ITourMethods {
    getNextNearestStartDateAndDate():{
        nearestStartDate:Date | null,
        estimatedEndDate: Date | null
    }
}


type TTourModel = Model<ITour,Record<string, unknown>, ITourMethods>


export default TTourModel