import { Category } from "./category";

export interface Plan {

    planId:number;
    type:string;
    premium:string;
    sumAssured:number;
    duration:number;
    category:Category;

}
